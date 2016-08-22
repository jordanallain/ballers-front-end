'use strict';

const authEvents = require('./auth/events');
const playerEvents = require('./player-requests/events');

$(document).on('click','.add_player_button',function(){
   playerEvents.onAddPlayer(this.id); // run a function to add player to user
  //  alert( 'success' );
});

$(() => {
    authEvents.addHandlers();
    playerEvents.addHandlers();
  $('.select-sign-up').on('click', function(){
    $('.sign-up-modal').modal('show');
  });
  $('.sign-up-btn').on('click', function(){
    $('.sign-up-modal').modal('hide');
  });
  $('.select-sign-in').on('click', function(){
    $('.sign-in-modal').modal('show');
  });
  $('.sign-in-btn').on('click', function(){
    $('.sign-in-modal').modal('hide');
  });
  $('.select-change-password').on('click', function(){
    $('.change-password-modal').modal('show');
  });
  $('.change-password-btn').on('click', function(){
    $('.change-password-modal').modal('hide');
  });
});
