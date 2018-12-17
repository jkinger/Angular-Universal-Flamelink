# Angular Universal Flamelink

Use this project as a starter template for building Angular Universal with Flamelink. Hosted on [Firebase Hosting](https://firebase.google.com/docs/hosting/) and [Firebase Functions](https://firebase.google.com/docs/functions/).

There are several gotchas when running Universal and Flamelink, make sure to see the "Gotchas" section below.


## Prerequisites

### Firebase

This project assumes you will be hosting on [Firebase](https://firebase.google.com/) and have your project created and setup already.

This project will be using Firebase for:

- Frontend code hosting using [Firebase Hosting](https://firebase.google.com/docs/hosting/).
- Backend Universal code hosting using [Firebase Functions](https://firebase.google.com/docs/functions/).

#### Add Firebase to You App

1. Install Firebase `npm install -g firebase-tools`
2. Add your Firebase configuration settings to `./src/environments/environment.prod.ts` and `.src/environments/environment.ts`.
   > See [Add Firebase to your app](https://firebase.google.com/docs/web/setup) on how to retrieve these settings.
3. Add your Firebase Project ID to `.firebaserc`

### Flamelink

This project assumes you will be using [Flamelink](https://flamelink.io/) as your CMS. You should already have your Flamelink project setup and connected successfully to Firebase. Their are no additional steps required in the code to connect the two if you did the top part of "Add Firebase to You App" correctly.

## Installing

Flamelink sdk [only installs](https://github.com/flamelink/flamelink/issues/27) with **node v8** so this project has a hard requirement of node v8 only.

Install packages for main project.

`npm install`

Install packages for Firebase Functions

`npm --prefix functions install`

> Like stated, this project uses Firebase Functions to host Angular Universal so you will need to install packages in `./functions` as well.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Build for Universal / Firebase Hosting

Run `npm run build:ssr` to build the project for Universal Server-Side Rendering (SSR). This will also copy the required build artifacts from `dist/` to `./functions/` for [Firebase Functions](https://firebase.google.com/docs/functions/) and `./public` folder for [Firebase Hosting](https://firebase.google.com/docs/hosting/).

After the build finishes successfully you can:

- Run locally by running `npm run serve:ssr`.
- Deploy to Firebase by running `npm run build:deploy`

To deply to Firebase you must do some additional configuration (see [Deploying to Firebase](https://firebase.google.com/docs/hosting/deploying)).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Gotchas
There were several issues trying to run Flamelink JS SDK with Universal.  Most notable is when serving a built Universal application, the webpage will hang trying to load and eventually timeout.

Here are some possible solutions:
1. Make sure your Firebase configuration settings are correct under `./src/environments/environment.prod.ts` and `.src/environments/environment.ts`.  Flamelink will hang if it can't connect and won't tell you.
2. Make sure your Firebase Database rules are setup correctly (see `database.rules.json`).  Firebase will hang if it can't connect and won't tell you.
3. Probably the most important (but least obvious).  In the service you instantiated Flamelink in, include `AngularFireDatabase` as a dependency even if you don't plan on using it (see `.src/app/flamelink.service.ts`).