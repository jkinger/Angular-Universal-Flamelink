import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const server = functions.https.onRequest((request, response) => {
  require(`${process.cwd()}/dist/my-app/server`).app(request, response);
});
