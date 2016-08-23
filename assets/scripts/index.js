'use strict';

const authEvents = require('./auth/events');
const playerEvents = require('./player-requests/events');

$(document).on('click', '.add-player-button', function(){
   playerEvents.onAddPlayer(this.id);
});

$(document).on('click', '.remove-player-button', function(){
  playerEvents.onRemovePlayer(this.id);
});

$(document).on('click', '.select-update-player', function(){
  $('#update-player-modal').modal('show');
});

$(() => {
    authEvents.addHandlers();
    playerEvents.addHandlers();
  $('#select-sign-up').on('click', function(){
    $('#sign-up-modal').modal('show');
  });
  $('.sign-up-btn').on('click', function(){
    $('#sign-up-modal').modal('hide');
  });
  $('#select-sign-in').on('click', function(){
    $('#sign-in-modal').modal('show');
  });
  $('.sign-in-btn').on('click', function(){
    $('#sign-in-modal').modal('hide');
  });
  $('#select-change-password').on('click', function(){
    $('#change-password-modal').modal('show');
  });
  $('.change-password-btn').on('click', function(){
    $('#change-password-modal').modal('hide');
  });
  $('#select-create-player').on('click', function(){
    $('#create-player-modal').modal('show');
  });
  $('.create-player-btn').on('click', function(){
    $('#create-player-modal').modal('hide');
  });
  $('.update-player-button').on('click', function(){
    $('#update-player-modal').modal('hide');
  });
});
