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
            'remove an employee',
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
            } else if (answers.firstStep === 'remove an employee') {
                remEmp();
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

//REMOVE DEPARTMENT
function remDep() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'id',
        message: "Please enter the id of the department you'd like to remove. (Required)",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('Please enter an id number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answer) => {
        let queryUrl = 'http://localhost:3001/api/department';
        queryUrl += "/" + Object.values(answer);
        fetch(queryUrl, {
            method: "DELETE",
          }).then(res => {
            console.log("Department Removed!");
            WorkForce.prototype.promptUser();
          }); 
    });
}




//VIEW ROLES
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

//ADD ROLES
function addRole() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: "Please enter the title of the role you'd like to add. (Required)",
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
        name: 'salary',
        message: "Please enter the salary of this role. (Required, no dollar sign, up to 2 decimals)",
        validate: salInput => {
            if (isNaN(salInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'department_id',
        message: "Please enter the id of the department this role belongs to. (Required)",
        validate: depInput => {
            if (isNaN(depInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answers) => {
        let queryUrl = 'http://localhost:3001/api/roles';
        fetch(queryUrl, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(answers)
          }).then(res => {
            console.log("role Added!");
            WorkForce.prototype.promptUser();
          }); 
    });
}

//REMOVE ROLES
function remRole() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'id',
        message: "Please enter the id of the role you'd like to remove. (Required)",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('Please enter an id number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answer) => {
        let queryUrl = 'http://localhost:3001/api/roles';
        queryUrl += "/" + Object.values(answer);
        fetch(queryUrl, {
            method: "DELETE",
          }).then(res => {
            console.log("Role Removed!");
            WorkForce.prototype.promptUser();
          }); 
    });
}

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

//ADD EMPLOYEE
function addEmp() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'first_name',
        message: "Please enter the first name of the employee you'd like to add. (Required)",
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
        name: 'last_name',
        message: "Please enter the last name of the employee you'd like to add. (Required)",
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
        name: 'role_id',
        message: "Please enter the role id that corresponds with the employee's job",
        validate: salInput => {
            if (isNaN(salInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'manager_id',
        message: "Please enter the id of the manager this employee reports to. (Required)",
        validate: manInput => {
            if (isNaN(manInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answers) => {
        let queryUrl = 'http://localhost:3001/api/employee';
        console.log(answers);
        fetch(queryUrl, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(answers)
          }).then(res => {
            console.log("Employee Added!");
            WorkForce.prototype.promptUser();
          }); 
    });
}

//REMOVE EMPLOYEES
function remEmp() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'id',
        message: "Please enter the id of the employee you'd like to remove. (Required)",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('Please enter an id number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answer) => {
        let queryUrl = 'http://localhost:3001/api/employee';
        let empId = Object.values(answer);
        empId = empId.join("");
        queryUrl += "/" + empId;
        fetch(queryUrl, {
            method: "DELETE",
          }).then(res => {
            console.log("Employee Removed!");
            WorkForce.prototype.promptUser();
          }); 
    });
}


//EDIT AN EMPLOYEE
function editEmp() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'employee_id',
        message: "Please enter the id of the employee you'd like to edit. (Required)",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'role_id',
        message: "Please enter the role id that corresponds with the employee's new job",
        validate: salInput => {
            if (isNaN(salInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'manager_id',
        message: "Please enter the id of the new manager this employee reports to. (Required)",
        validate: manInput => {
            if (isNaN(manInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answers) => {
        let queryUrl = 'http://localhost:3001/api/employee';
        let empId = Object.values(answers.employee_id);
        empId = empId.join("");
        queryUrl += "/" + empId;
        console.log(answers);
        fetch(queryUrl, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(answers)
          }).then(res => {
            console.log("Employee Updated!");
            WorkForce.prototype.promptUser();
          }); 
    });
}

// VIEW EMPLOYEES BY MANAGER
function empByMan() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'manager_id',
        message: "Please enter the id of the manager whose employees you'd like to see. (Required)",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answers) => {
        let queryUrl = 'http://localhost:3001/api/employee/man/';
        let empId = Object.values(answers.manager_id);
        empId = empId.join("");
        queryUrl += empId;
        fetch(queryUrl)
        .then(response => {
          if (!response.ok) {
            return alert('Error: ' + response.statusText);
          }
          WorkForce.prototype.promptUser();
        }) 
    });
}

// VIEW EMPLOYEES BY DEPARTMENT
function empByDep() {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'dep_id',
        message: "Please enter the id of the department whose employees you'd like to see. (Required)",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log('Please enter a number!');
                return false;
            } else {
                return true;
            }
        }
    },
    ])
    .then((answers) => {
        let queryUrl = 'http://localhost:3001/api/employee/dep/';
        let depId = Object.values(answers.dep_id);
        depId = depId.join("");
        queryUrl += depId;
        fetch(queryUrl)
        .then(response => {
          if (!response.ok) {
            return alert('Error: ' + response.statusText);
          }
          WorkForce.prototype.promptUser();
        }) 
    });
}

// VIEW SALARY BUDGET BY DEPARTMENT
function viewSal() {
    let queryUrl = 'http://localhost:3001/api/employee/sal';
    fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      WorkForce.prototype.promptUser();
    }) 
}









export default WorkForce;