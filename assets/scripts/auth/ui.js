'use strict';

const app = require('../app');

const signUp = (data) => {
  return $.ajax({
    url: app.api + 'sign-up',
    method: "POST",
    data,
  });
};

module.exports = {
  signUp,
};
