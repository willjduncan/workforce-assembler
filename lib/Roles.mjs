import inquirer from 'inquirer';
import fetch from "node-fetch";
import WorkForce from './prompter.mjs';

function Roles() {};

//VIEW ROLES
Roles.prototype.viewRole = function() {
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
Roles.prototype.addRole = function() {
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
Roles.prototype.remRole = function() {
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



export default Roles;