'use strict'
var exec = require('child_process').exec;
const Setting = use('App/Models/Setting');
class ChatController {
  
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
    console.log('user joined with %s socket id', socket.id)
    this.socket.on('respaldar', (data) =>{
      console.log(data);      
      
      let command = exec('mysqldump --user=root --password= -h 127.0.0.1 -P 3306 backup > myfile05022019.sql');
      socket.emit('server', 'success')     
      
    })
  }
  // onMessage () {    
  //   this.socket.on('respaldar', (data) =>{
  //     console.log(data);
  //     let command = exec('mysqldump --user=root --password= -h 127.0.0.1 -P 3306 backup > myfile05022019.sql');
  //     socket.emit('server', 'success')     
      
  //   })
  // }
}

module.exports = ChatController
