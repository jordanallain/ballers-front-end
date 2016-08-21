'use strict';

const app = require('../app');

// ajax request to get all the players
const getAllPlayers = () => {
  return $.ajax({
    url: app.api + 'players',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

module.exports = {
  getAllPlayers,
};
