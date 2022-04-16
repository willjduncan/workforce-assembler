import inquirer from 'inquirer';
import fetch from "node-fetch";
import WorkForce from './prompter.mjs';

function Employee() {};

//VIEW EMPLOYEES
Employee.prototype.viewEmp = function() {
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
Employee.prototype.addEmp = function() {
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
Employee.prototype.remEmp = function() {
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
Employee.prototype.editEmp = function() {
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
Employee.prototype.empByMan = function() {
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
Employee.prototype.empByDep = function() {
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
Employee.prototype.viewSal = function() {
    let queryUrl = 'http://localhost:3001/api/employee/sal';
    fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      WorkForce.prototype.promptUser();
    }) 
}



export default Employee;