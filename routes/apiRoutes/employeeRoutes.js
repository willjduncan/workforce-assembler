const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const cTable = require('console.table');

// View all employees in a table
router.get('/employee', (req, res) => {
    const sql = `SELECT e.id, e.first_name AS employee_first, e.last_name AS employee_last, e1.first_name AS manager_first, 
    e1.last_name AS manager_last, roles.title AS role_title, roles.salary, department.dep_name AS department 
    FROM employee e 
    LEFT JOIN employee e1 ON e.manager_id = e1.id 
    INNER JOIN roles ON e.role_id = roles.id 
    INNER JOIN department ON roles.department_id = department.id;`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(console.table(rows))
      });
});



// View employees by manager.
router.get('/employee/man/:id', (req, res) => {
    const sql = `SELECT e.id, e.first_name AS employee_first, e.last_name AS employee_last, e.manager_id, 
    e1.first_name AS manager_first, e1.last_name AS manager_last 
    FROM employee e 
    LEFT JOIN employee e1 on e.manager_id = e1.id 
    WHERE e.manager_id=? 
    ORDER BY e.manager_id;`;
    const params = [req.params.id];
    db.query(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(console.table(rows))
      });
});

// View employees by department.
router.get('/employee/dep/:id', (req, res) => {
    const sql = `SELECT employee.id, employee.first_name AS employee_first, employee.last_name AS employee_last,
     department.dep_name AS department 
     FROM employee 
     INNER JOIN roles ON employee.role_id = roles.id 
     INNER JOIN department ON roles.department_id = department.id 
     WHERE department.id=? 
     ORDER BY department.id;`;
    const params = [req.params.id];
    db.query(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(console.table(rows))
      });
});

// View total salary by department.
router.get('/employee/sal', (req, res) => {
    const sql = `SELECT department.dep_name AS department, SUM(roles.salary) AS total_salaries 
    FROM employee 
    INNER JOIN roles ON employee.role_id = roles.id 
    INNER JOIN department ON roles.department_id = department.id 
    GROUP BY department.id;`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(console.table(rows))
      });
});


// Create a new employee
router.post('/employee', ({ body }, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


// Delete employee
router.delete('/employee/:id', (req, res) => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
        // checks if anything was deleted
      } else if (!result.affectedRows) {
        res.json({
          message: 'role not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
});

module.exports = router;