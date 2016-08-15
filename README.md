# DartBot -- Back End 

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

The project is deployed to heroku with the following app instance url: 

`http://dartmouthbot.herokuapp.com/`

## API Endpoints

#### Location 

- GET `/api/locs` returns gps (lat, long) and content for all locations
- POST `/api/locs` creates a new location (w/ gps and content). 
- GET `/api/locs/:id` returns gps (lat, long) for a specific location
- PUT `/api/locs/:id` edits an existing location with the passed in `id`
- DELETE `/api/locs/:id` deletes an existing location with the passed in `id`

#### Bio 

- GET `/api/bios` returns name, content, and image (TODO) for all tour guide bios
- POST `/api/bios` creates a new bio (w/ name, content, and image). 
- GET `/api/bios/:id` returns name, content, and image (TODO) for tour guide bio having id equal to passed in id
- PUT `/api/bios/:id` edits an existing bio possessing the passed in `id`
- DELETE `/api/bios/:id` deletes an existing bio possessing the passed in `id`

#### User

reference TODO at the top

## Authors

TODO

## Acknowledgments

TODO

# TODO 
- finalize login method and design backend (auth, etc) accordingly
- setup S3 for image storage

