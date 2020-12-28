const inquirer = require("inquirer");
const sql = require("mysql2");
const cnsTble = require("console.table");
//const db= require('.');

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
          break;
        case "View All Roles":
          break;
        case "View All Employees":
          break;
        case "Update Employees":
          break;
        case "ADD Department":
          break;
        case "ADD ROLE":
          break;
        case "ADD EMPLOYEE":
          break;
        default:
          break;
      }
    });

  connection.end();
};
