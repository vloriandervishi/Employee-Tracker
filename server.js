const inquirer = require("inquirer");
const sql = require("mysql2");
const cnsTble = require("console.table");
const Logo=require('../Employee-Tracker/logo');
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
          connection.query("SELECT *FROM department", function (err, result) {
            if (err) {
              console.log(err,);
            }
            console.table(result);
          });
          break;
        case "View all Roles":
            connection.query("SELECT *FROM role", function (err, result) {
                if (err) {
                  console.log(err);
                }
                console.table(result);
              });
          break;
        case "View all Employees":
          connection.query("SELECT *FROM employee", function (err, result) {
            if (err) {
              console.log(err);
            }
            console.table(result);
          });
          break;
        case "Update Employees":
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

  //
  //};
  // function viewAllDepartments(){

  //   return connection.query(sqlQuery,function(error,res){
  //       if(error)
  //           return `Nothing in there `;

  //       console.table(res);

  //    });
};
