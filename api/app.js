'use strict';
import Hapi from 'hapi';
import db from './src/modules/config/db';

const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000 , routes:{ cors:true } });
server.app.db = db;

// ### --- START SERVER --- ### 
const controllers = [

]

server.register(controllers , (err) => {

    if(err) { throw err }

})

export default server;