<template > 
    <v-app>
        <div>
            <div>
                <header>
                    <div class="container">
                        <h1>Settings</h1>                                        
                    </div>
                </header>
            </div>
            <div class="container">
                <v-card>
                    <v-card-title>
                        <h2 style="color: #006064">Formulario</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6>
                                    <v-select                                                    
                                    :items="listaDB"
                                    item-value="name"
                                    item-text="name"
                                    label="Base de Datos"
                                    required
                                    data-vv-name="basedatos"
                                    v-validate="'required'"
                                    v-model="basedatos"                                            
                                     :error-messages="errors.collect('basedatos')"                                
                                    ></v-select>
                                </v-flex>  
                                <v-flex xs12 sm6 md4>
                                    <v-text-field                                                    
                                    autofocus 
                                    label="Titulo"                                                                      
                                    data-vv-name="titulo"                               
                                    required  
                                    v-validate="'required'" 
                                    v-model="titulo"                            
                                    :error-messages="errors.collect('titulo')"                              
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field                                   
                                    label="Usuario"                                                                      
                                    data-vv-name="usuario"                               
                                    required 
                                    v-validate="'required'" 
                                     v-model="usuario"                               
                                    :error-messages="errors.collect('usuario')"                                 
                                    ></v-text-field>
                                </v-flex>
                                 <v-flex xs12 sm6 md4>
                                    <v-text-field                                   
                                    label="Contraseña"                                                                      
                                    data-vv-name="contraseña"                                   
                                    v-model="contraseña"                                                                                       
                                    type="password"     
                                                                
                                    ></v-text-field>
                                </v-flex>
                                <v-flex >
                                    <v-text-field                                   
                                    label="Fecha"                                                                      
                                    data-vv-name="fecha"                             
                                    required                                
                                    type="date"
                                    v-validate="'required'" 
                                    v-model="fecha"    
                                     :error-messages="errors.collect('fecha')"                               
                                    ></v-text-field>
                                </v-flex>
                                <v-flex >
                                    <v-text-field                                   
                                    label="Hora"                                                                      
                                    data-vv-name="hora"                                  
                                    required                            
                                    
                                    type="time"
                                    v-validate="'required'" 
                                    v-model="hora"  
                                     :error-messages="errors.collect('hora')"                            
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea 
                                    label="Descripcion*"
                                    box                              
                                    auto-grow 
                                    required
                                    data-vv-name="descripcion" 
                                    v-validate="'required'"                                                             
                                    v-model="descripcion"                                  
                                     :error-messages="errors.collect('descripcion')"                                       
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" flat @click="submit">Guardar</v-btn>
                    </v-card-actions>
                </v-card>
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
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import {API} from '../servicios/axios'
Vue.use(VeeValidate)
export default {
   data:()=>({
       $_veeValidate: {
        validator: 'new'
        }, 
       titulo:"",
       descripcion:"",
       basedatos:"",
       usuario:"",
       contraseña:"",
       fecha:"",
       hora:"",

       listaDB:[{"name":"backup"}],

       dictionary:{          
            custom:{
                titulo: {
                    required: () => 'El titulo no puede estar vacio',                    
                    // custom messages
                },
                descripcion: {
                    required: () => 'La descripcion no puede estar vacia',                    
                    // custom messages
                },                
                basedatos: {
                    required: () => 'La basedatos no puede estar vacia',
                    
                    // custom messages
                },
                usuario: {
                    required: () => 'El usuario no puede estar vacio',                               
                    // custom messages
                },
                fecha:{
                    required: () => 'La fecha no puede estar vacia',               
                    // custom messages
                },
                hora:{
                    required: () => 'La hora no puede estar vacia',               
                    // custom messages
                }                
            }
        }  
   }),
   
   mounted: function(){   
       this.$validator.localize('en', this.dictionary);    
   },
   created(){
       
   },
   methods : {
       submit () {
        this.$validator.validateAll().then(valid =>{
            if(valid){
                API.post('settings/',{                    
                    name: this.titulo,  
                    name_db: this.basedatos,
                    user_db: this.usuario,
                    password_db: this.contraseña,
                    decription: this.descripcion,
                    date_backup: this.fecha,
                    time_backup: this.hora,         
                }) 
                this.$router.push({name:'Tabla'})               
            }   
        })
      }
   }
  }
</script>