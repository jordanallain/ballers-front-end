'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log("Signed in");
};

const signOutSuccess = () => {
  console.log("Signed out");
  console.log(app.user);
  delete app.user;
  console.log(app.user);
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
};
