import mysql from 'mysql2';

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      //MySQL password
      password: 'hazelnut',
      //Database related to this program
      database: 'workforce'
    },
    console.log('Connected to the election database.')
);

export default db;