const inquirer = require("inquirer");
const sql = require("mysql2");
const cnsTble = require("console.table");
const Logo = require("../Employee-Tracker/logo");
const { up } = require("inquirer/lib/utils/readline");
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
  console.log(`
  ${Logo()}
  
  `);
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
          vad();
         
          break;
        case "View all Roles":
          vaRoles();
          break;
        case "View all Employees":
         vae();
          break;
        case "Update Employees":
         updateEmployees();
         break;
        case "ADD Department":
          inquirer
            .prompt([
              {
                type: "input",
                name: "department",
                message: "The name of the department your adding?",
              },
            ])
            .then((addD) => {
              connection.query(
                `INSERT INTO department(name)VALUE('${addD.department}')`,
                function (err, result) {
                  if (err) console.log(err);
                  console.table(result);
                }
              );
            });

          break;
        case "ADD ROLE":
          inquirer
            .prompt([
              {
                type: "list",
                name: "title",
                message: "What is roles title?",
                choices: [
                  "Project Manager",
                  "Product Owner",
                  "Team Lead",
                  "Tech Lead",
                  "Full-Stack Developer",
                  "Back-end Developer",
                  "QA LEAD",
                  "QA",
                ],
              },
              {
                type: "input",
                name: "salary",
                message: "What is the salary for this role?",
              },
              {
                type: "input",
                name: "department_id",
                message: "What is the id for the department ?",
              },
            ])
            .then((roleChoice) => {
              connection.query(
                `INSERT INTO role(title,salary,department_id)VALUE('${roleChoice.title}',${roleChoice.salary},${roleChoice.department_id})`,
                function (err, result) {
                  if (err) {
                    console.log(err);
                  }
                  console.table(result);
                }
              );
            });
          break;
        case "ADD EMPLOYEE":
          inquirer
            .prompt([
              {
                type: "input",
                name: "first",
                message: "The first name of the employee?",
              },
              {
                type: "input",
                name: "last",
                message: "What is the last name of the employee?",
              },
              {
                type: "input",
                name: "roleId",
                message: "What is the employees role id number?",
              },
              {
                type: "input",
                name: "managerId",
                message: "what is the employees managers id?",
              },
            ])
            .then((emP) => {
              connection.query(
                `INSERT INTO employee(first_name,last_name,role_id,manager_id)VALUE('${emP.first}','${emP.last}',${emP.roleId},${emP.managerId})`,
                function (err, result) {
                  if (err) console.log(err);
                  console.log(result);
                }
              );
            });

          break;
        default:
          connection.end();
          break;
      }
    });

};

const vad=()=>{
  
  connection.query("SELECT *FROM department", function (err, result) {
    if (err) {
      console.log(err);
    }
    console.table(result);
    afterConnection();
  });
  
};

const vaRoles=()=>
{
  connection.query("SELECT *FROM role", function (err, result) {
    if (err) {
      console.log(err);
    }
    console.table(result);
    afterConnection();
  });
};
const vae=()=>{
  connection.query("SELECT *FROM employee", function (err, result) {
    if (err) {
      console.log(err);
    }
    console.table(result);
    afterConnection();
  });
};
const updateEmployees=()=>{
  inquirer
  .prompt([
    {
      type: "list",
      name: "options",
     // message: "Update the first name?",
      choices: [
        "FirstName",
        "LastName",
        "RoleID",
        "ManagerID",
      ],
    },
  ])
  .then((updateEmployee) => {
    //console.log(updateEmployee.options);
    switch (updateEmployee.options) {
      
        
      case "FirstName":
       
        inquirer
          .prompt([
            {
              type: "input",
              name: "oldFirstName",
              message:
                "Which existing name  first name would you like to update?",
            },
            {
              type: "input",
              name: "newFirstName",
              message:
                "What would you like to update for the new first name?",
            },
          ])
          .then((newEFirstName) => {
            //console.log(newEFirstName.newEFirstName,'NEW');
          // console.log(newEFirstName.oldFirstName,'OLD');
             connection.query(
              `UPDATE employee SET first_name='${newEFirstName.newFirstName}' WHERE first_name='${newEFirstName.oldFirstName}'`,
              function (err, result) {
                if (err) console.log(err);
               //console.table(result);
                vae();
                
              }
            );
          });
          //vae();
        break;
      case "LastName":
        inquirer
          .prompt([
            {
              type: "input",
              name: "oldLastName",
              message:
                "Which existing last name would like to change?",
            },
            {
              type: "input",
              name: "newLastName",
              message:
                "What would you like to update for the last name?",
            },
          ])
          .then((newELastName) => {
            connection.query(
              `UPDATE employee SET last_name='${newELastName.newLastName}' WHERE last_name='${newELastName.oldLastName}'`,
              function (err, result) {
                if (err) console.log(err);
                console.table(result);
                vae();
                
              }
            );
          });
          break;
          case 'ManagerID':
            inquirer
            .prompt([
              {
                type: "input",
                name: "selectById",
                message:
                  "Select the row which you like to change the manager_id?",
              },
              {
                type: "input",
                name: "newManagerId",
                message:
                  "What would you like to update for the new manager_id ?",
              },
            ])
            .then((newEmanagerId) => {
              connection.query(
                `UPDATE employee SET manager_id=${newEmanagerId.newManagerId} WHERE id=${newEmanagerId.selectById}`,
                function (err, result) {
                  if (err) console.log(err);
                  console.table(result);
                  vae();
                }
              );
            });
        break;
      case "RoleID":
        inquirer
          .prompt([
            {
              type: "input",
              name: "selectById",
              message:
                "Select the id wich you want to change the role_id for?",
            },
            {
              type: "input",
              name: "newRoleID",
              message:
                "What would like to update for the role id?",
            }
          ])
          .then((newEroleId) => {
            
            connection.query(
              `UPDATE employee SET role_id=${newEroleId.newRoleID} WHERE id=${newEroleId.selectById}`,
              function (err, result) {
                if (err) console.log(err);
                console.table(result);
                vae();
                 
              }
            );
          });
          
        break;
        
    }
    
  });

}