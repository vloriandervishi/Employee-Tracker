const inquirer = require("inquirer");
const sql = require("mysql2");
const cnsTble = require("console.table");
const Logo = require("../Employee-Tracker/logo");
const { up } = require("inquirer/lib/utils/readline");

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
          "View all employees by Managers",
          "VIew all employees by Department",
          "View Budget of A Department",
          "Update Employees",
          "ADD",
          "Delete",
          "Exit",
        ],
      },
    ])
    .then((selections) => {
      switch (selections.selection) {
        case "View All Departments":
          console.log("\n");

          vad();

          break;
        case "View all Roles":
          console.log("\n");
          vaRoles();
          break;
        case "View all Employees":
          console.log("\n");
          vae();
          break;
        case "Update Employees":
          console.log("\n");
          updateEmployees();
          break;
          case "ADD":
            inquirer.prompt({
               type:'list',
               name:'addList',
               message:'Select what item on the list?',
               choices:['ADD-Department','ADD-ROLE','ADD-EMPLOYEE']
            }).then(addL=>{
            switch(addL.addList){
        case "ADD-Department":
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
                  console.log("\n\n\n\n\n\n");
                  console.table(result, "\n");
                  console.log("\n\n\n\n\n\n");
                }
              );
              vad();
              afterConnection();
            });

          break;
        case "ADD-ROLE":
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
                  "Accounting",
                  "Web Designer",
                  "Software Engineer",
                  "Assistant HR Manager",
                  "QA MANAGER",
                  "Public Relation Manager",
                  "IT SUPPORT ANALYST",
                  " IT Help Desk",
                  "Media Relations",
                  "Customer Service Desk",
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
                  if (!err) {
                    console.log(err);
                  }

                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              console.log("\n");
              afterConnection();
            });
          break;
        case "ADD-EMPLOYEE":
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
                  if (!err) console.log(err);

                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              console.log("\n");
              afterConnection();
            });

          break;
            }
            
          });
          break;
        case "View all employees by Managers":
          inquirer
            .prompt([
              {
                type: "input",
                name: "manager",
                message: "Type the managers id?",
              },
            ])
            .then((managers) => {
              connection.query(
                `SELECT employee.first_name AS 'FIRST', employee.last_name AS 'LAST',role.title AS'TITLE' from employee INNER JOIN role ON manager_id=role.id WHERE manager_id=${managers.manager}`,
                function (error, result) {
                  if (!error) console.log(error);

                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              console.log("\n");
              afterConnection();
            });
          break;
        case "VIew all employees by Department":
          inquirer
            .prompt([
              {
                type: "input",
                name: "department",
                message: "Type the department  id?",
              },
            ])
            .then((departments) => {
              connection.query(
                `select first_name AS "FIRST",last_name AS "LAST", salary, title AS "TITLE",name AS "Department" from employee INNER JOIN role ON employee.role_id=role.id INNER JOIN department ON role.department_id=department.id  WHERE department.id=${departments.department}`,
                function (error, result) {
                  if (!error) console.log(error);

                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              afterConnection();
            });
          break;
        case "Delete":
          inquirer
            .prompt({
              type: "list",
              name: "deleteList",
              message: "What do you want to delete?",
              choices:['Delete-Employee','Delete-Role','Delete-Department']
            })
            .then(deleteThis => {

              switch (deleteThis.deleteList) {
                case "Delete-Employee":
                  inquirer
                    .prompt([
                      {
                        type: "input",
                        name: "delete",
                        message: "Type in the employee id you want to delete?",
                      },
                    ])
                    .then((deleteEmployee) => {
                      connection.query(
                        `DELETE FROM EMPLOYEE WHERE employee.id=${deleteEmployee.delete}`,
                        function (err, result) {
                          if (!err) console.log(err);

                          console.log("\n\n\n\n\n\n");
                          console.table(result);
                          console.log("\n\n\n\n\n\n");
                        }
                      );
                      afterConnection();
                    });
                  break;
                case "Delete-Role":
                  inquirer
                    .prompt([
                      {
                        type: "input",
                        name: "delete",
                        message: "Type in the role id you want to delete?",
                      },
                    ])
                    .then((deleteRole) => {
                      connection.query(
                        `DELETE FROM role WHERE role.id=${deleteRole.delete}`,
                        function (err, result) {
                          if (!err) console.log(err);

                          console.log("\n\n\n\n\n\n");
                          console.table(result);
                          console.log("\n\n\n\n\n\n");
                        }
                      );
                      afterConnection();
                    });
                  break;
                case "Delete-Department":
                  inquirer
                    .prompt([
                      {
                        type: "input",
                        name: "delete",
                        message:
                          "Type in the department id you want to delete?",
                      },
                    ])
                    .then((deleteDepartment) => {
                      connection.query(
                        `DELETE FROM DEPARTMENT WHERE department.id=${deleteDepartment.delete}`,
                        function (err, result) {
                          if (!err) console.log(err);

                          console.log("\n\n\n\n\n\n");
                          console.table(result, "\n");
                          console.log("\n\n\n\n\n\n");
                        }
                      );
                      vad();
                      afterConnection();
                    });
                  break;
              }
              
            });
            break;
        case "View Budget of A Department":
          inquirer
            .prompt([
              {
                type: "input",
                name: "budget",
                message: "Type in the id of the department?",
              },
            ])
            .then((budgets) => {
              connection.query(
                `select SUM(salary) AS "BUDGET", name AS "Department" from employee INNER JOIN role ON employee.role_id=role.id INNER JOIN department ON role.department_id=department.id WHERE department.id=${budgets.budget}`,
                function (err, result) {
                  if (!err) console.log(err);
                  console.log("\n");
                  console.table(result);

                  console.log("\n");
                }
              );
              afterConnection();
            });
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
};

const vad = () => {
  afterConnection();
  connection.query("SELECT *FROM department", function (err, result) {
    if (!err) {
      console.log(err);
    }
    console.log("\n\n\n\n\n\n");
    console.table(result);
    console.log("\n\n\n\n\n\n");
  });
};

const vaRoles = () => {
  connection.query("SELECT *FROM role", function (err, result) {
    if (!err) {
      console.log(err);
    }

    console.log("\n\n\n\n\n\n");
    console.table(result);
    console.log("\n\n\n\n\n\n");
  });

  afterConnection();
};
const vae = () => {
  connection.query("SELECT *FROM employee", function (err, result) {
    if (!err) {
      console.log(err);
    }

    console.log("\n\n\n\n\n\n");
    console.table(result);
    console.log("\n\n\n\n\n\n");
  });
  afterConnection();
};
const updateEmployees = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        // message: "Update the first name?",
        choices: ["FirstName", "LastName", "RoleID", "ManagerID"],
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
                  if (!err) console.log(err);
                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              console.log("\n");
              afterConnection();
              console.log("\n");
              vae();
            });
          //vae();
          break;
        case "LastName":
          inquirer
            .prompt([
              {
                type: "input",
                name: "oldLastName",
                message: "Which existing last name would like to change?",
              },
              {
                type: "input",
                name: "newLastName",
                message: "What would you like to update for the last name?",
              },
            ])
            .then((newELastName) => {
              connection.query(
                `UPDATE employee SET last_name='${newELastName.newLastName}' WHERE last_name='${newELastName.oldLastName}'`,
                function (err, result) {
                  if (!err) console.log(err);
                  console.log("\n");

                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              vae();
              afterConnection();
            });
          break;
        case "ManagerID":
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
                  if (!err) console.log(err);
                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              vae();
              afterConnection();
            });
          break;
        case "RoleID":
          inquirer
            .prompt([
              {
                type: "input",
                name: "selectById",
                message:
                  "Select the employee's id wich you want to change the role_id for?",
              },
              {
                type: "input",
                name: "newRoleID",
                message: "What would like to update for the role id?",
              },
            ])
            .then((newEroleId) => {
              connection.query(
                `UPDATE employee SET role_id=${newEroleId.newRoleID} WHERE id=${newEroleId.selectById}`,
                function (err, result) {
                  if (!err) console.log(err);
                  console.log("\n");

                  console.log("\n\n\n\n\n\n");
                  console.table(result);
                  console.log("\n\n\n\n\n\n");
                }
              );
              afterConnection();
              vae();
            });

          break;
      }
    });
};
