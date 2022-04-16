import inquirer from 'inquirer';
import fetch from "node-fetch";
import WorkForce from './prompter.mjs';

function Department() {};

//VIEW DEPARTMENTS
Department.prototype.viewDep = function() {
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
Department.prototype.addDep = function() {
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
Department.prototype.remDep = function() {
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


export default Department;