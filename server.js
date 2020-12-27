const inquirer =require ('inquirer');
const sql= require('mysql2');
const cnsTble= require ('console.table');
//const db= require('.');


// create the connection to database 

const connection= sql.createConnection({
  host: 'localhost',
  port:3306,

  user:'root',
  password:'root',
  database: 'emp_tracker_db'
});

connection.connect(err=>{
  if(err) throw err;
  console.log('connected as id' + connection.threadId);
 afterConnection();
});

