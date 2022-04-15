const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Role = require('../lib/Role');
const Department = require('../lib/Department');


function WorkForce() {
    this.department= [];
    this.role = [];
    this.employee= [];
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
            this.manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.manOffNum);
            if(answers.nextStep === 'view all departments') {
                this.viewDep();
            } else if (answers.nextStep === 'add a department') {
                this.addDep();
            } else if (answers.nextStep === 'remove a department') {
                this.remDep();
            } else if (answers.nextStep === 'view all roles') {
                this.viewRole();
            } else if (answers.nextStep === 'add a role') {
                this.addRole();
            } else if (answers.nextStep === 'remove a role') {
                this.remRole();
            } else if (answers.nextStep === 'view all employees') {
                this.viewEmp();
            } else if (answers.nextStep === 'add an employee') {
                this.addEmp();
            } else if (answers.nextStep === 'edit an employee') {
                this.editEmp();
            } else if (answers.nextStep === 'view employees by manager') {
                this.empByMan();
            } else if (answers.nextStep === 'view employees by departmnet') {
                this.empByDep();
            } else if (answers.nextStep === 'view salary budget by department') {
                this.viewSal();
            }
        });
    };


//DEP PROMPTS
WorkForce.prototype.promptInt = function() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'intName',
        message: 'Please enter the name of the intern. (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter a name!');
            return false;
            }
        }
        },
    {
        type: 'input',
        name: 'intId',
        message: "What is your intern's ID number?",
        //Make sure the input is a number
        validate: idInput => {
            if (!isNaN(idInput)) {
            return true;
            } else {
            console.log('Please enter an ID number!');
            return false;
            }
        }
    },
    .then((answers) => {
        this.interns.push(new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool));
        console.log(this.interns);
        if(answers.nextStep === "add an engineer") {
            this.promptEng();
        } else if (answers.nextStep === "add an intern") {
            this.promptInt();
        } else {
            return generatePage(this);
        }
    });
};

module.exports = WorkForce;