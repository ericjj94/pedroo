# API explorer for Rick and Morty API using Apollo Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Typescript as a template.

## About the application

The application is a Single page application that implements the Rick and Morty API with Apollo Client (an open source GraphQL client for the web).

The application consists of integration of

1. Characters

2. Episodes

3. Locations

and the details page of each entities listed above.

The Rick and Morty API uses GraphQL and is hosted here: [https://rickandmortyapi.com/graphql](https://rickandmortyapi.com/graphql).

## Characters

The characters section contains information about all the characters on the show. This is the landing page of the application and it shows a lists of characters that are available in the database.

## Episodes

The episodes section contains information about all the episodes of the show. This can be accessed by clicking the episode link in the header which would redirect to /episodes

## Locations

The locations section contains information about all the locations mentioned in the show. This can be accessed by clicking the locations link in the header which would redirect to /locations

## To setup the development locally

1. git clone the application

2. cd pedroo

3. npm i

4. npm run start - the app should start on localhost:3000

## Available Scripts for the application

In the project directory, you can run:

### `npm start`

Open [http://localhost:8080](http://localhost:3000) to view it in the browser.

### `npm run start:prod`

Runs the production build of app which is served from an express server.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

## Additional packages used in the project

1. styled-components

2. Apollo client

3. Material UI

4. Bootstrap

5. Redux

## Scope of Improvement

1. Introducing the implementation of Intersection Observer will allow the lazy loading of images for an improved first paint on pages where images are rendered.

2. Redux should be added for ensuring the global state and sharing data between components

3. The show more functionality in details component should actually fetch data when clicked. Currently, it renders the rest of the data present from the initial requests.

4. Since the implementation of the Characters,Locations,Episodes are almost the same, it would be possible to create a wrapper component and let the component decide the rendering of the content needed. This is evident from the test cases as the test cases are identical for all three of them.

5. Adding a theme to the application that would allow the user to change the theme of the app.

**_Note: There is an warning coming up from material UI for invalidate DOM Nesting.The env file has been added to Git(which is done on purpose)_**
