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
};

const signOutSuccess = () => {
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
