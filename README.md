# Webpack-Express boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/saikarthikreddyginni/webpack-express-boilerplate.svg)](https://greenkeeper.io/)

Webpack Express Boilerplate

## Requirements
**Minimum Tested Versions**
- node (v7.8.0)
- npm (v4.2.0)

These can be installed via homebrew in mac (`brew upgrade && brew install node`). NPM should be installed automatically when installing node. If upgrading through homebrew, make sure you run `brew upgrade` first.
Install node modules with `npm install`

## Running code locally
 1. Clone the repo `git clone git@github.com:saikarthikreddyginni/webpack-express-boilerplate.git`
 2. From the cloned directory run `npm install`
 3. Make a copy of `.env-example` and rename it to `.env`
 4. Set the appropriate values to the env variables in `.env` file
 5. Run `npm run dev`

The app will run on http://localhost:3000

## Running on Production
To run the code on production.
1. Run `npm run test` to run all the tests
2. Run `npm run build` to build the app
3. Run `npm run start` to start the application in prod mode

# Contributing
Make a new feature branch off dev and create a pull request when ready. Always make sure you have the latest changes on dev before branching.
