# workforce-assembler
Module 12 Challenge

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

        

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)  
        



## Description

AS A business owner

I WANT to be able to view and manage the departments, roles, and employees in my company

SO THAT I can organize and plan my business

<!-- Note Taker is a program that allows a user to write, keep, and delete notes. The challenge is meant to test my ability to create the backend of a website and combine it with the frontend. It will prove my full-stack coding chops while giving me a chance to better my skills at Node and Express.js and become more familiar with Insomnia for testing.  -->

Once complete, the program should operate so that:

GIVEN a command-line application that accepts user input

WHEN I start the application

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments

THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department

THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role

THEN I am prompted to select an employee to update and their new role and this information is updated in the database

<!--  Try to add some additional functionality to your application, such as the ability to do the following:

Update employee managers.

View employees by manager.

View employees by department.

View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.





The final product should allow a user to type notes and for the program to save them and keep them accessible and deletable. 

After downloading the starter code, getting npm, organizing files, and adding scaffolding, remembering to include the necessary middleware, I could begin to code, beginning with the server. Once everything was prepared, I focused on routing the two html pages, index and notes. I then focused on displaying notes through the api/notes route. The POST was accomplished thanks to studying Activity 5 of the In-Class activities of Module 11, specifically how to read the data file and then append a new item to the data file without deleting what was there. I added unique ids using the UUID package through npm. 

Once all the Acceptance Criteria were fulfilled, I added the DELETE ability. While it was a little challenging, I found it similar to the POST solution, in that you have to first read the data file and then make a new array of its objects somehow. This time, I used the filter ability to search for the id.   -->



## Installation

<!-- Links to the repository and deployed website can be found at [Questions](#questions).

While this project's repository is available on Github, the deployed site is found on herouku. If you download or clone the code, make sure to install npm. -->



## Usage

<!-- Once the project is cloned and the dependencies downloaded, type "npm start" to run the program. Go to localhost:3001/ or my deployed heroku site at [https://willjduncan-note-taker.herokuapp.com/](https://willjduncan-note-taker.herokuapp.com/)

Screenshots of the mockup and actual site are shown below

![screenshot of Mockup](/public/assets//images/mockup.png)
![screenshot of Active Site](/public/assets//images/screenshot-active.png)


Screenshots of the server.js file and the noteRoutes.js file are below: 

![screenshot of Server](/public/assets/images/screenshot-server.png)
![screenshot of noteRoutes](/public/assets//images/screenshot-noteRoutes.png)

A screenshot of Insomnia at work is also included, showing that the API fetch of note data works

![screenshot of page-template](/public/assets//images/screenshot-insomnia.png) -->


## Credits

<!-- The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/).The WHEN/THEN section of this README was based off the project assignment Acceptance Criteria. No TAs or classmates were used in the making of this challenge. Most influence was taken particularly from Zookeepr of Module 11 and Activity 5 of the In-Class Assignments for Module 11. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. Node.js, Insomnia, Express.js, npm, and npm's UUID package were also used. -->



## Contributing

<!-- Other items to be added can be more data such as documents made for listmaking, or adding more properties to the current database such as time of creation or due date. Editable notes, or drag and drop functionality would give users more interaction with the page. Just make sure to keep things organized and in their respective folders.  -->


## Tests

<!-- No Jest tests written were made for this challenge, but Insomnia is a critical tool in letting us test the program's GET, POST, and DELETE methods. If you want to run tests, download Insomnia or some similar program, activate the program in Terminal using "npm start", and then use the Localhost URL to try the different methods.  -->



## Questions

<!-- My Github username is willjduncan.


My Github Profile can be found below:

[https://github.com/willjduncan](https://github.com/willjduncan)


The repository to this project is below:

[https://github.com/willjduncan/note-taker.git](https://github.com/willjduncan/note-taker.git)


The Heroku-deployed site is below:

[https://willjduncan-note-taker.herokuapp.com/](https://willjduncan-note-taker.herokuapp.com/)


For any additional questions, I can be reached at willdunc12@gmail.com. -->



## License

[view license link here](https://choosealicense.com/licenses/mit/)

        
MIT License

Copyright (c) [2022] [willjduncan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.






<!-- 
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to


WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database


WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database


WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
Update employee managers.
View the total utilized budget of a department—in other words, the combined salaries of all employees in that department. 





SELECT department, SUM(sales) AS "Total sales"
FROM order_details
GROUP BY department;

SELECT SUM(roles.salary) AS total_salaries,
     department.dep_name AS department 
     FROM employee 
     INNER JOIN roles ON employee.role_id = roles.id 
     INNER JOIN department ON roles.department_id = department.id 
     ORDER BY department.id;

SELECT department.dep_name AS department, SUM(roles.salary) AS total_salaries 
     FROM employee 
     INNER JOIN roles ON employee.role_id = roles.id 
     INNER JOIN department ON roles.department_id = department.id 
     GROUP BY department.id;





View employees by manager.
SELECT e.id, e.first_name as employee_first, e.last_name as employee_last, e.manager_id, e1.first_name as manager_first, e1.last_name as manager_last from employee e left join employee e1 on e.manager_id = e1.id WHERE e.manager_id=1 ORDER BY e.manager_id;

SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));


View employees by department.
SELECT employee.id, employee.first_name as employee_first, employee.last_name as employee_last, department.dep_name AS department from employee inner join roles on employee.role_id = roles.id inner join department on roles.department_id = department.id WHERE department.id=1 ORDER BY department.id;


select e.id, e.first_name as employee_first, e.last_name as employee_last, e1.first_name as manager_first, e1.last_name as manager_last, roles.title AS role_title, roles.salary, department.dep_name AS department from employee e left join employee e1 on e.manager_id = e1.id inner join roles on e.role_id = roles.id inner join department on roles.department_id = department.id;


SELECT roles.*, department.dep_name AS department_name
FROM department
JOIN roles ON department.id = roles.department_id;

-->