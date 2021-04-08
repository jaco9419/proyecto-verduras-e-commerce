# proyecto-verduras-e-commerce

Proyecto Verduras e-commerce built in React.

You can check out this project hosted on firebase by coyping the following link and adding a valid accounts path.

For example:
https://proyecto-verduras-e-commerce.web.app/accounts/puesto1

Or you can run it locally as follows:

http://localhost:3000/accounts/puesto3/products
_________________________________________________

## Firebase Deployment

##### Go to https://firebase.google.com/

* Login/sign up
* Select firebase console (upper right corner)
* Add new project
* Enter your project name (e.g.: my-project)
* Disable google analytics in case they are not needed and press create project

##### On the project's root directory's console, enter the following commands:

* `npm run build` (it generates a "./build" directory)
* `npm install firebase-tools -g`
* `firebase login` (enter firebase username and password if required)
* `firebase init`

* Answer the wizard's questions as follows or as needed:
  * Are you ready to proceed? y
  * Which Firebase cli features do you want to set up for this folder? Press space to select features: 
  * (*) Hosting
  * Please select an option: use existing proyect
  * Select a default firebase project for this directory: "my-project"
  * What do you want to use as your public directory? build
  * Configure as a single-page app? y
  * Set up automatic builds and deploys with GitHub? n
  * Overwrite HTML ? n

* `firebase deploy`

##### Open the generated URL

_________________________________________________

## Update Firebase Project

* `npm run build`
* `firebase deploy`

_________________________________________________


## Getting Started with Create React App Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Intalls all necessary dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
