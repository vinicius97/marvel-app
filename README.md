[![CircleCI](https://circleci.com/gh/vinicius97/marvel-app/tree/master.svg?style=svg)](https://circleci.com/gh/vinicius97/marvel-app/tree/master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

### Tools
- Redux and Rematch as redux framework - https://github.com/rematch/rematch
- Jest and Enzyme for unit and integration testing
- Firebase as storage of deployed content
- Axios as request handler
- React Router as router manager
- Create React App
- SASS as CSS pre-processor

### Style Guides
For this project consider to use StandardJS as Javascript Code Style Guide and BEM as CSS Code Style Guide

## Environment Setup
Before run this project you need to setup the environment variables in a .env file as above:
````bash
  REACT_APP_BASE_URL=BASE_ENDPOINTS_URL
  REACT_APP_MARVEL_SECRET=SECRET_KEY_FROM_MARVEL
  REACT_APP_MARVEL_PUBLIC=PUBLIC_KEY_FROM_MARVEL
````

## Available Scripts
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
