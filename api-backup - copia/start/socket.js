'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')
//var exec = require('child_process').exec;

Ws.channel('chat', 'ChatController',)
// Ws.channel('chat', ({ socket }) => {
//   console.log('user joined with %s socket id', socket.id)
  
//   socket.on('message', (data) => {
//     console.log(data);
//   })
  
//   socket.on('respaldar', (data) =>{
//     console.log(data);
//     let command = exec('mysqldump --user=root --password= -h 127.0.0.1 -P 3306 backup > myfile05022019.sql');
//     socket.emit('server', 'success')     
    
//   })
  
// })


//Ws.channel('chat', 'ChatController')

