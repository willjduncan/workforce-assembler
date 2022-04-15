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
                this.promptUser();
            } else if (answers.firstStep === 'add a department') {
                this.addDep();
            } else if (answers.firstStep === 'remove a department') {
                this.remDep();
            } else if (answers.firstStep === 'view all roles') {
                this.viewRole();
            } else if (answers.firstStep === 'add a role') {
                this.addRole();
            } else if (answers.firstStep === 'remove a role') {
                this.remRole();
            } else if (answers.firstStep === 'view all employees') {
                this.viewEmp();
            } else if (answers.firstStep === 'add an employee') {
                this.addEmp();
            } else if (answers.firstStep === 'edit an employee') {
                this.editEmp();
            } else if (answers.firstStep === 'view employees by manager') {
                this.empByMan();
            } else if (answers.firstStep === 'view employees by departmnet') {
                this.empByDep();
            } else if (answers.firstStep === 'view salary budget by department') {
                this.viewSal();
            }
        });
    };


//DEP PROMPTS
function viewDep() {
    let queryUrl = 'http://localhost:3001/api/department';
    fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      return response.json();
    }) 
};




export default WorkForce;