#!/bin/bash

projectName=blackcoin

usage="raspiUbuntuSetup.sh [install | chroot]"
system="Ubuntu 20.04.1"
deviceOptions="eval lsblk -l | grep -vE 'lvm|sda|loop' && echo ''"
deviceQuestions="Which block device would you like to ${1} with ${system}? (eg. \`sdb\`)"
imageLocal="/home/daniel/Distros/ubuntu-20.04.1-preinstalled-server-arm64+raspi.img.xz"
imageRemote="https://cdimage.ubuntu.com/releases/20.04.1/release/ubuntu-20.04.1-preinstalled-server-arm64+raspi.img.xz"
imageDL="/tmp/pibuntu"

case $1 in 

install)
success="You can use the image as it is, or after booting it once remount it on this device and use \`piUbuntuSetup.sh chroot\`"

	if [[ -f "$imageLocal" ]]; then
		testSUM=`echo 'aadc64a1d069c842e56a4289fe1a6b4b5a0af4efcf95bcce78eb2a80fe5270f4  '${imageLocal} | shasum -a 256 --check | awk '{print $2}' 2> /dev/null`
		if [ "${testSUM}" == "OK" ]; then
			echo -e "\n Using local image at ${imageLocal} \n"
			${deviceOptions}
			read -p "${deviceQuestions} " device
			xzcat "${imageLocal}"| sudo dd bs=32M of=/dev/${device} && sync
			echo $success
		else
			echo "SHASUM Doesn't Match!!!"
		fi
	else
		wget ${imageRemote} -O ${imageDL}
		testSUM=`echo 'aadc64a1d069c842e56a4289fe1a6b4b5a0af4efcf95bcce78eb2a80fe5270f4  '${imageDL} | shasum -a 256 --check | awk '{print $2}' 2> /dev/null`
		if [ "${testSUM}" == "OK" ]; then
			echo -e "\n Using local image at ${imageDL} \n"
			${deviceOptions}
			read -p "${deviceQuestions} " device
			xzcat "${imageDL}"| sudo dd bs=32M of=/dev/${device} && sync
			echo $success
		else
			echo "SHASUM Doesn't Match!!!"
		fi
	fi
	;;

chroot)
	# Check for dependencies
	bsupport=eval which binfmt-support
	qemu=eval which qemu
	qemuUS=eval which qemu-user-static

	[[ -z $bsupport || -z $qemu || -z $qemuUS ]] && sudo apt-get -yqq install qemu qemu-user-static binfmt-support 

	armAbled=`update-binfmts --display | grep 'arm '  | awk '{print $2}' | tr -d "():"`

	[[ $armAbled == enabled ]] && echo -e	" \n ARM is ENABLED! \n" || echo -e " \n ARM is DISABLED!!! \n"; 

	# sudo dpkg --add-architecture armhf
	# sudo sed -i 's|deb h|deb [arch=amd64] h|g' /etc/apt/sources.list.d/*
	# sudo sed -i 's|deb-src h|deb-src [arch=amd64] h|g' /etc/apt/sources.list.d/*
	# sudo sed -i 's|deb h|deb [arch=amd64] h|g' /etc/apt/sources.list
	# sudo sed -i 's|deb-src h|deb-src [arch=amd64] h|g' /etc/apt/sources.list
	# sudo apt update

	directory=/home/daniel/HOME.BK/RandomTech/SystemInstalls

	# Get device info

	${deviceOptions}
	read -p "${deviceQuestions} " device

	# mount partition
	sudo mkdir -p /mnt/${projectName}/system-boot
	sudo mount -o rw /dev/${device}1 /mnt/${projectName}/system-boot
	sudo mount -o rw /dev/${device}2 /mnt/${projectName}

	# mount binds
	sudo mount --bind /dev /mnt/${projectName}/dev/
	sudo mount --bind /sys /mnt/${projectName}/sys/
	sudo mount --bind /proc /mnt/${projectName}/proc/
	sudo mount --bind /dev/pts /mnt/${projectName}/dev/pts
	sudo mount --bind /run /mnt/${projectName}/run/
	sudo mount --bind ${directory} /mnt/${projectName}/mnt/


	# copy qemu binary
	sudo cp /usr/bin/qemu-arm-static /mnt/${projectName}/usr/bin/

	# chroot to project
	echo -e "\n Entering ${projectName} CHROOT. \n 
	HINT: \n cp /mnt/raspi_setup.sh /opt/; exit \n"

	sudo chroot /mnt/${projectName} /bin/bash

	# cleanup
	sudo umount /dev/${device}{1,2} -l 2> /dev/null
	sudo umount /dev/${device}{1,2} -f 2> /dev/null

	echo -e "\n Now boot your Raspi and run \`/opt/raspi_setup.sh\` \n"
	;;

*)
    echo -e $usage
	;;	
esac