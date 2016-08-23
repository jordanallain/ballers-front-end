'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

//prevents page from refreshing and calls a function from ./api
//the function it calls from ./api sends an ajax request to sign a new user up
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api checks to see if user exists, if they do it
//logs them in
const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api checks to see if old password is correct. if
//it is it changes the value to the new password
const onChangePassword = function onChangePassword(event){
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api deletes the token attached to the user
const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#select-sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
