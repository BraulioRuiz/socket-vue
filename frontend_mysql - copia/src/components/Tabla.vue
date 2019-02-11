<template > 
    <v-app>
        <div>
            
            <div>
                <header>
                    <div class="container">
                        <h1>Settings</h1> 
                        <v-flex xs2 right>
                            <v-btn color="red lighten-5" v-on:click="verFormulario()">Crear</v-btn>
                        </v-flex>                       
                    </div>
                </header>
            </div>
            <div>
                <v-container>             
                    <v-data-table
                    :headers="headers"
                    :items="settings"
                    class="elevation-1"
                    dark    
                    >
                        <template slot="items" slot-scope="props">
                        <td>{{ props.item.id }}</td>
                        <td >{{ props.item.name }}</td>
                        <td >{{ props.item.name_db }}</td>
                        <td >{{ props.item.user_db }}</td>
                        <td>{{ props.item.decription }}</td>
                        <td>{{ props.item.date_backup }} {{ props.item.time_backup }}</td>                      
                        <td >
                            <v-btn-toggle >
                                <v-btn color="blue lighten-1" small v-on:click="respaldarSetting(props.item.id)">Respaldar</v-btn>
                                <v-btn color="red lighten-1" small v-on:click="borrarSetting(props.item.id)">Borrar</v-btn>
                                <v-btn color="green lighten-1" small v-on:click="editarSetting(props.item.id)">Editar</v-btn>
                            </v-btn-toggle>                            
                        </td>            
                        </template>
                    </v-data-table>        
                </v-container>  
            </div>    
            <div>
                <v-alert
                v-model="alert"
                dismissible
                type="success">
                    Respaldo exitoso
                </v-alert>
            </div>   
        </div>        
    </v-app>    
</template>
<style>
    header{
    background: #a00000;
    color: #fff;
    }
    .fondo{
        background: #a00000;
    }
    html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    }
    h1 {
    font-family: 'Proza Libre', sans-serif;
    color: #fff;
    font-size: 250%;   
    }
</style>
<script src="https://unpkg.com/@adonisjs/websocket-client"></script>
<script>
import Axios from 'axios';
import {API} from '../servicios/axios'
import "babel-polyfill"
import Ws from '@adonisjs/websocket-client'
const ws = Ws('ws://localhost:3333')
  export default {
   data:()=>({
       chat: null,
       alert : false,
       settings:[],
       setting:[],
       headers: [
          {
            text: 'Id',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Archivo'},
          { text: 'Nombre de Base de Datos'},
          { text: 'Nombre de Usuario'},
          { text: 'Descripcion'},
          { text: 'Fecha y Hora' },          
          { text: 'Accion' }
        ],
        messages: []
   }),
   mounted: function(){  
        
   },
   created(){
       this.getSettings();      
        this.conexionSocket();
        
        
   },
   methods : {
       getSettings(){              
            API({
                method:'get',
                url:'settings'
            })
            .then( response =>{
            console.log(response.data),
            this.settings=response.data
            })        
       },
       verFormulario(){
           this.$router.push({name:'formulario'})
       },   
       editarSetting(id_setting){
           this.$router.push({name:'EditarFormulario', query: {id: id_setting} })
       },  
       borrarSetting(id_setting){
           API({
                method:'delete',
                url:'settings/' +  id_setting
            })
            .then( response =>{
            console.log(response.data)            
            })    
            this.$router.go() 
       },
       conexionSocket(){
            ws.connect();
            this.chat= ws.subscribe('chat')
            
       },
       respaldarSetting(id_setting){
            API({
                method:'get',
                url:'settings/' +  id_setting
            })
            .then( response =>{
                console.log(response.data)
                this.setting = response.data
                this.chat.emit('respaldar', this.setting)
            })                
            
            this.chat.on('server', (data) => {
                 console.log(data);
                this.alert = true;
            })
           
       }
   }
  }
</script>