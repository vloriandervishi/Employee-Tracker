const inquirer = require("inquirer");
const sql = require("mysql2");
const cnsTble = require("console.table");
//const db= require('./db/schema.sql');

// create the connection to database

const connection = sql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",
  password: "root",
  database: "emp_tracker_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
  afterConnection();
});

afterConnection = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        message: "Select from the options",
        choices: [
          "View All Departments",
          "View all Roles",
          "View all Employees",
          "Update Employees",
          "ADD Department",
          "ADD ROLE",
          "ADD EMPLOYEE",
        ],
      },
    ])
    .then((selections) => {
        
      switch (selections.selection) {
          
        case "View All Departments":
         connection.query('SELECT *FROM department',function(err,result){
            if(err) {
                console.log(err,'Nothing red');
            }
            console.log(result);
         });
          break;
        case "View All Roles":
          break;
        case "View All Employees":
          break;
        case "Update Employees":
          break;
        case "ADD Department":
            inquirer.prompt([{
                type: 'input',
                name: 'department',
                message: 'The name of the department your adding?'
      }]).then(addD=>{
          connection.query('SELECT COUNT (id) FROM department',function(err,result){
               if(err) console.log(err);
               console.log(result); // should print 2
           });
           
          connection.query(`INSERT INTO department(name)VALUE('${addD.department}')`,function(err,result){
             if(err) console.log( err);
              console.log(result);
          });
        });
        
          break;
        case "ADD ROLE":
            
          break;
        case "ADD EMPLOYEE":
          break;
        default:
            connection.end();
          break;
      }
    });

 // 
//};
// function viewAllDepartments(){
   
//   return connection.query(sqlQuery,function(error,res){
//       if(error)
//           return `Nothing in there `;
      
//       console.table(res);

//    });
   

  
};
