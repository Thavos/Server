'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

const Player = require('./Classes/player');

let Players = [];
let Sockets = [];

io.on('connection', function(socket){
    console.log('Conetion made')
/*
    let player = new Player();
    let thisPlayerID = player.id;

    Players[thisPlayerID] = player;
    Sockets[thisPlayerID] = socket;
 
    socket.emit('register', {id : thisPlayerID})
    socket.emit('spawn', player);
    socket.broadcast.emit('spawn', player);

    for(let playerID in Players){
        if(playerID != thisPlayerID){
            socket.emit('spawn', Players[playerID]);
        }
    }

    socket.on('updatePos', function(data){
        player.position.x = data.position.x;
        player.position.y = data.position.y;

        socket.broadcast.emit('updatePos', player);
    });
*/
    socket.on('disconnect', function(){
        console.log('Disconected');
        /*delete Players[thisPlayerID];
        delete Sockets[thisPlayerID];
        socket.broadcast.emit('disconnected', player);*/
    });
});


setInterval(() => io.emit('time', 'Port : ' + PORT), 1000);