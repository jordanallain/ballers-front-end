'use strict';

const app = require('../app');

//ajax request to the api to create a new user
const signUp = (data) => {
  return $.ajax({
    url: app.api + 'sign-up',
    method: "POST",
    data,
  });
};

//ajax request for user to sign in
const signIn = (data) => {
  return $.ajax({
    url: app.api + 'sign-in',
    method: "POST",
    data,
  });
};

module.exports = {
  signUp,
  signIn,
};
