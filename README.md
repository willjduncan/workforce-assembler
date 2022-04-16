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

Workforce Assembler is a program that allows a user to organize and store his/her organization's employee data. The challene is meant to combine everything I've learned about the back end so far, from earlier modules involving inquirer to the ability to create and fetch from databases using SQL. It will take good googling skills to assemble what I've learned into one cohesive program as well. 

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

The final product should allow the user to make changes to employees, jobs, and departments, while also viewing the data in informative ways. It should also provide some protections to make sure the data is safe and consistent.

I found this challenge to be particularly difficult. After setting up my sql files according to the outline provided, I began to work on the MySql requests. I had to ask for some help from a friend of mine involved in coding to begin to understand better the ins and outs of the syntax. I still have not found a way to send an alert if the request, say, for a manager's employee's returns an empty table because the id chosen is not that of a manager.

After I finally got the routes set up, I began to focus on the inquirer. Unfortunately, this also turned out to be much more challenging than anticipated. I tried to set up the inquirer so that, based on a user's choices and input, it would send fetch requests to the server. However, the terminal did not recognize my fetch function, so after much delving, I discovered I needed to download the node-fetch npm module, but then that wasn't registering, so I added "type":"module" to my package.json, and altered the prompter file to mjs from js. I then had to alter all of my imports and exports because the new system I set up didn't recognize the term "require".

Once that was sorted, writing the functions went smoothly. I had decided at the beginning of the project to include the following bonus functionality:

Update employee managers.

View employees by manager.

View employees by department.

View the total utilized budget of each department.

Adding them at the beginning made the coding easier, because it meant I could finish and test all routes before focusing on trying to get inquirer to work. 




## Installation

Links to the repository can be found at [Questions](#questions).

While this project's repository is available on Github, but it does not have a front end and cannot be deployed. You must first clone the repo, then run the command "npm install" on the Terminal/Command Line in order to download the dependencies. Make sure to also download inquirer, express, console.table, and node-fetch using "npm install %package%" for each respective package. Double check to make sure package.json includes "type":"module". From there, you can fill out and edit your team. If you want to run tests, you also have to install mysql2.




## Usage

<!-- Once the project is cloned and the dependencies downloaded, type "npm start" to run the program. 

A screenshot of the program in action is shown below;

![screenshot of Active Site](/images/screenshot-active.png)

Screenshots of the server.js file and the employeeRoutes.js file are below: 

![screenshot of prompter](/images/screenshot-prompter.png)
![screenshot of employeeRoutes](/images/screenshot-employeeRoutes.png)

A screenshot of Insomnia at work is also included, showing that the API fetch of note data works

![screenshot of Insomnia](/images/screenshot-insomnia.png) 

A video explaining and demonstrating the app's functionality is below:

[https://drive.google.com/file/d/1fpUPzZ8xsgI8BrnhTcdO_vuMhYNBl-P1/view](https://drive.google.com/file/d/1fpUPzZ8xsgI8BrnhTcdO_vuMhYNBl-P1/view)-->


## Credits

The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/).The WHEN/THEN section of this README was based off the project assignment Acceptance Criteria. No TAs or classmates were used in the making of this challenge. I did enlist the help of an old friend who is also learning SQL at this time, Logan Kirkland, to achieve the table that shows all employees, but for all other methods I relied on myself and my googling skills. Most influence was taken particularly from U-Develop-It of Module 12 for coding related to SQL and my Team Profile Generator from the Module 10 Challenge for coding related to Inquirer. All employee names are book characters. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. MySql, Node.js, Insomnia, Express.js, npm, and npm's inquirer, express, console.table, and node-fetch packages were also used.



## Contributing

Other items to be added can be more employee information such as email, address, a timestamp, years with the company. We could add another table involving locations if workers are based in multiple cities. Adding a front end to this would also be a big step. Most pressing would be adding more protections to make sure the information we request gets properly vetted and the responses the user receives are informative. Setting Inquirer up so that the user can choose from department names, manager names, and employee names rather than type a user id would also help this program's functionality.



## Tests

No Jest tests written were made for this challenge, but Insomnia is a critical tool in letting you test the program's GET, POST, PUT, and DELETE methods. If you want to run tests, download Insomnia or some similar program, activate the program in Terminal using "npm start", and then use the Localhost URL to try the different methods. 



## Questions

My Github username is willjduncan.


My Github Profile can be found below:

[https://github.com/willjduncan](https://github.com/willjduncan)


The repository to this project is below:

[https://github.com/willjduncan/workforce-assembler.git](https://github.com/willjduncan/workforce-assembler.git)


For any additional questions, I can be reached at willdunc12@gmail.com.



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
LEFT TO DO
Refactor
screenshots
video



Select 
IF (EXISTS    
    (
    SELECT e.id, e.first_name AS employee_first, e.last_name AS employee_last, e.manager_id, 
    e1.first_name AS manager_first, e1.last_name AS manager_last 
    FROM employee e 
    LEFT JOIN employee e1 on e.manager_id = e1.id 
    WHERE e.manager_id=1 AND e1.manager_id IS NULL 
    ),
    (SELECT e.id, e.first_name AS employee_first, e.last_name AS employee_last, e.manager_id, 
    e1.first_name AS manager_first, e1.last_name AS manager_last 
    FROM employee e 
    LEFT JOIN employee e1 on e.manager_id = e1.id 
    WHERE e.manager_id=1 AND e1.manager_id IS NULL 
    ORDER BY e.manager_id),
           (RAISERROR('Manager not found!', 1, 1)));




-->