'use strict';

const app = require('../app');

// ajax request to get the players associated with the current user
// const getFavoritePlayers = () => {
//   return $.ajax({
//     url: app.api, // add something to make this go to users specific players,
//     method: "GET",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }});
// };

// data is player id number
const addPlayer = (data) => {
  console.log("addPlayer data = " + data);
  return $.ajax({
    url: app.api + 'favorites',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      favorite: {
        player_id: data
      }
  }});
};

const getFavoritePlayers = () => {
  return $.ajax({
    url: app.api + 'players',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }});
};

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
  getFavoritePlayers,
  addPlayer,
};