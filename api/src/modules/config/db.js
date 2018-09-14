const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.DB_HOST;

if(URL.length > 35) {
    mongoose.connect(URL/**/,{ useMongoClient: true } /**/)
} else {
    mongoose.connect(URL)
}
mongoose.Promise = require('bluebird');

const db = mongoose.connection;
/*
const user = {
    username:"admin",
    email:"admin@rionorte.net",
    password:"$2a$10$YJOOAm87a5f/nf2CR33iGufbM/Wq2RriskTqEKwkh6cojdZUffPUa",
    role:"admin",
    isActive:true
}
db.collection('accounts').insert(user)
*/
db.on('error', (err) => console.log('Erro de conexao.', err) );
db.on('open', () => console.log('Conexão aberta.') );
db.on('connected', (err) => console.log('Conectado na base: ', URL) );
db.on('disconnected', (err) => console.log('Desconectado') );


export default db;

