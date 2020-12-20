#!/bin/bash

system="Ubuntu 20.04.1"
whichDevice='Which block device would you like format with ${system}? (eg. `sdb`)'
image=https://cdimage.ubuntu.com/releases/20.04.1/release/ubuntu-20.04.1-preinstalled-server-arm64+raspi.img.xz

lsblk -l | grep -vE 'lvm|sda|loop'

read -p "${whichDevice} " device

wget ${image} | sudo dd bs=4m of=/dev/sdX conv=fsync