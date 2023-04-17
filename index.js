const express = require('express');
const xlsx = require('xlsx');
const ejs = require('ejs');
const app = express();

// Load the Excel file
const workbook = xlsx.readFile('data.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the worksheet to JSON
const data = xlsx.utils.sheet_to_json(worksheet);

// Set up the EJS template engine
app.set('view engine', 'ejs');

// Create a route to display the data
app.get('/', (req, res) => {
  res.render('index', { data });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
