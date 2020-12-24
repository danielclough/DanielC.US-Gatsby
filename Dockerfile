FROM node:slim AS base

WORKDIR /

RUN apt-get update && apt-get -yqq install git python3 make g++ 

# Build from Github
FROM base AS clone
RUN apt-get update && apt-get -yqq install git && \
	git clone https://github.com/danielclough/DanielC.US-Gatsby.git 
FROM clone AS build
WORKDIR DanielC.US-Gatsby  
COPY .env .env
RUN npm install -g gatsby-cli  && \
	npm install

# Build from Local
#FROM clone AS build
#WORKDIR /app
#COPY . .
#RUN npm install -g gatsby-cli  && \
#	npm install && \
#	gatsby build


# Development
CMD ["gatsby", "develop", "-H", "0.0.0.0", "-p", "8101"]
EXPOSE 8101