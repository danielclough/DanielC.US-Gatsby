FROM node:slim

WORKDIR /app
# COPY . .

RUN apt-get update && apt-get -yqq install git && \
	git clone https://github.com/danielclough/DanielC.US-Gatsby.git && \
	cd DanielC.US-Gatsby && \
	npm install -g gatsby-cli  && \
	npm install

CMD ["gatsby", "develop", "-H", "0.0.0.0" ]

EXPOSE 8000
