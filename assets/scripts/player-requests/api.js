'use strict';

const app = require('../app');

// const updatePlayer = (id, newTeam) => {
//   return $.ajax({
//     url: app.api + 'players/' + id,
//     method: "PATCH",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: {
//       player: {
//         'team': newTeam,
//       }
//     }
//   });
// };

// create player ajax call
// const createPlayer = (data) => {
//   console.log(data.player.given_name);
//   return $.ajax({
//     url: app.api + 'players',
//     method: "POST",
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: {
//       player: {
//         'given_name': data.player.given_name,
//         'surname': data.player.surname,
//         'team': data.player.team,
//         'position': data.player.position,
//         'points_per_game': data.player.points_per_game,
//         'rebounds_per_game': data.player.rebounds_per_game,
//         'assists_per_game': data.player.assits_per_game,
//         'twitter': data.player.twitter,
//         'instagram': data.player.instagram
//         }
//       }
//   });
// };

const removePlayer = (data) => {
  return $.ajax({
    url: app.api + 'favorites/' + data,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }});
};

// ajax request to get the players associated with the current user
const getFavoritePlayers = () => {
  return $.ajax({
    url: app.api + 'favorites',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }});
};

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
  removePlayer,
  // createPlayer,
  // updatePlayer,
};
