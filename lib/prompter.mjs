import inquirer from 'inquirer';
import Employee from './Employee.mjs';
import Roles from './Roles.mjs';
import Department from './Department.mjs';


function WorkForce() {};


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
            'remove an employee',
            'edit an employee',
            'view employees by manager', 
            'view employees by departmnet',
            'view salary budget by department']
          },
        ])
        .then((answers) => {
            if(answers.firstStep === 'view all departments') {
                Department.prototype.viewDep();
            } else if (answers.firstStep === 'add a department') {
                Department.prototype.addDep();
            } else if (answers.firstStep === 'remove a department') {
                Department.prototype.remDep();
            } else if (answers.firstStep === 'view all roles') {
                Roles.prototype.viewRole();
            } else if (answers.firstStep === 'add a role') {
                Roles.prototype.addRole();
            } else if (answers.firstStep === 'remove a role') {
                Roles.prototype.remRole();
            } else if (answers.firstStep === 'view all employees') {
                Employee.prototype.viewEmp();
            } else if (answers.firstStep === 'add an employee') {
                Employee.prototype.addEmp();
            } else if (answers.firstStep === 'remove an employee') {
                Employee.prototype.remEmp();
            } else if (answers.firstStep === 'edit an employee') {
                Employee.prototype.editEmp();
            } else if (answers.firstStep === 'view employees by manager') {
                Employee.prototype.empByMan();
            } else if (answers.firstStep === 'view employees by departmnet') {
                Employee.prototype. empByDep();
            } else if (answers.firstStep === 'view salary budget by department') {
                Employee.prototype.viewSal();
            }
        });
    };


export default WorkForce;