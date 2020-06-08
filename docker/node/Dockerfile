FROM node:14.4

RUN apt-get update
RUN apt-get install -y --no-install-recommends sudo git openssh-client

RUN apt-get autoremove && apt-get clean && rm -rf /var/lib/apt/lists/*
