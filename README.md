# Verifilms

Welcome to Verifilms. This web application is designed to fetch information about
films and series from [OMDB API](https://www.omdbapi.com/).
This project is part of a challenge to evaluate the frontend skills with Vue & Nuxt 3  integrating an API.

## Challenge overview

The goal of this challenge is to create a responsive web page that allows users to:
 - Search for films by title.
  - View detailed information about a selected film.

Furthermore is needed: 

- Login page to allow user sign into the webpage
- Page to list all the films & series
- Details page to see more information about the media

## Prerequisites

To be able to install the project it is needed the following:

- node (v >= 20.8.0)

## Technologies used 

The technologies used to develop this project are the following:

- Nuxt 3 (v 3.8.1)
- Vue 3 Composition API (v 3.3.8)
- Pinia (v 2.1.7)

## Getting started

Follow these steps to set up the project locally:
1. Clone de repository from https://github.com/DanielLorenzoCabrera/verifilms.git
2. Navigate to the project directory: ***"cd verifilms"***
3. Install the dependencies: ***yarn install***
4. Run the application in development mode: ***yarn dev***

## Usage

1. Open your browser at **localhost:3000**
2. Register a new account
3. Login with your new account
4. You can search films and click on them to see more information

## Notes

- The register & login are dummy. No backend was implemented to authenticate users. 
- The data is persisted in cookies to be able to login again without making the register again.