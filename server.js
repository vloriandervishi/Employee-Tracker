const inquirer =require ('inquirer');
const sql= require('mysql2');
const cnsTble= require ('console.table');
const db= require ('./db');


// create the connection to database 

const connection= sql.createConnection