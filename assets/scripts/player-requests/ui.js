'use strict';

// const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const getAllPlayersSuccess = (data) => {
  console.log(data);
};


module.exports = {
  success,
  failure,
  getAllPlayersSuccess,
};
