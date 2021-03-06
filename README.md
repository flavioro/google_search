# google_search

![](assets/demo.gif)

React application to use google and bing APIs to search and show elements

A small project, build in React and Redux, to fetch and display results using google or bing APIs.

To generate the certificates to use custom search instances i used the next steps:

Google:

1. Go to https://cse.google.com/all
2. Select your search engine or Create one and go into that
3. You can find the CX id titled as "Search engine ID"
4. Public URL also has the cx id in the Query param as ?cx=\*\*

Bing:
Follow the next instrucctions: (https://docs.microsoft.com/en-us/azure/cognitive-services/bing-custom-search/quick-start)

This project was bootstrapped with [Create React App] (https://github.com/facebook/create-react-app).

This project use [RxJs] to building effects to controll asynchronous functions like services. (https://www.npmjs.com/package/rxjs)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `tslint 'src/**/*.{ts,tsx}'`

Launch command to verify syntax, indentation and correct use of function variables in code.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
