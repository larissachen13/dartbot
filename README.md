# Project Name

API for DartBot - The Virtual Tour Guide Bot
DartBot (Tour Guide) provides prospective students with a tour of Dartmouth by (1) providing information about various locations across campus and directions to the next stop of the tour and (2) answering questions they may have using a Facebook Messenger ChatBot.

This repo contains the code for the API server backend portion of the project.

## Architecture

Our code is organized into three main repos: the API backend, the DartBot Tour Guide frontend and the Facebook Messenger bot using botkit.
The API stores Loc (Location) of sites on the tour with the gps coordinates of the location and the content related to this location.
The Profile schema (used in our bio page) stores the name and a description of each tour guide.

We will be using mongodb and mongoose to store and access the API.
TODO:  descriptions of code organization and tools and libraries used

## Setup


TODO: how to get the project dev environment up and running, npm install etc

## Deployment

We currently plan to deploy the server on heroku with a free mongo database.

## Authors

TODO: list of authors

## Acknowledgments
