import inquirer from 'inquirer';
import fetch from "node-fetch";
// const fetch = require("node-fetch");
// const Employee = require('../lib/Employee');
// const Role = require('../lib/Role');
// const Department = require('../lib/Department');


function WorkForce() {
    // this.department= [];
    // this.role = [];
    // this.employee= [];
}


WorkForce.prototype.promptUser = function() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'firstStep',
            message: 'What would you like to do?',
            choices: ['view all departments', 
            'add a department', 
            'remove a department', 
            'view all roles', 
            'add a role', 
            'remove a role',
            'view all employees', 
            'add an employee', 
            'edit an employee',
            'view employees by manager', 
            'view employees by departmnet',
            'view salary budget by department']
          },
        ])
        .then((answers) => {
            if(answers.firstStep === 'view all departments') {
                viewDep();
            } else if (answers.firstStep === 'add a department') {
                addDep();
            } else if (answers.firstStep === 'remove a department') {
                remDep();
            } else if (answers.firstStep === 'view all roles') {
                viewRole();
            } else if (answers.firstStep === 'add a role') {
                addRole();
            } else if (answers.firstStep === 'remove a role') {
                remRole();
            } else if (answers.firstStep === 'view all employees') {
                viewEmp();
            } else if (answers.firstStep === 'add an employee') {
                addEmp();
            } else if (answers.firstStep === 'edit an employee') {
                editEmp();
            } else if (answers.firstStep === 'view employees by manager') {
                empByMan();
            } else if (answers.firstStep === 'view employees by departmnet') {
                empByDep();
            } else if (answers.firstStep === 'view salary budget by department') {
                viewSal();
            }
        });
    };


//VIEW DEPARTMENTS
function viewDep() {
    let queryUrl = 'http://localhost:3001/api/department';
    fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      WorkForce.prototype.promptUser();
    }) 
};


//ADD DEPARTMENT
function addDep() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'dep_name',
        message: "Please enter the name of the department you'd like to add. (Required)",
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a name!');
            return false;
            }
        }
    },
    ])
    .then((answer) => {
        let queryUrl = 'http://localhost:3001/api/department';
        console.log(answer);
        fetch(queryUrl, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(answer)
          }).then(res => {
            console.log("Department Added!");
            WorkForce.prototype.promptUser();
          }); 
    });
}




//VIEW ROLE
function viewRole() {
    let queryUrl = 'http://localhost:3001/api/roles';
    fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      WorkForce.prototype.promptUser();
    }) 
};

//VIEW EMPLOYEES
function viewEmp() {
    let queryUrl = 'http://localhost:3001/api/employee';
    fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      WorkForce.prototype.promptUser();
    }) 
};




export default WorkForce;