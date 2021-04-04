const express = require('express');
//import express from 'express';

const app = express();

app.use(express.json()); //so that we'll have access to the body of the requested data. And this needs to be above all the routes.

// Use let instead of const so that we can filter through students
let students = [
  {
    id: 0,
    firstName: 'Cassidy',
    lastName: 'Gliedt',
    favoriteColor: 'green'
  },
  {
    id: 1,
    firstName: 'Max',
    lastName: 'Gliedt',
    favoriteColor: 'yellow'
  }
]

app.get("/", (request, response) => {
  console.log(request);
  response.send("Hello from Express!");
});

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/api/students/:id', (req, res) => {
  const studentId = req.params.id;
  res.json(students[studentId]);
});

app.post('/api/students', (req, res) => {
  const newStudent = {
    id: students.length,
    //long way:
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    // favoriteColor: req.body.favoriteColor,
    //short way: push the rest of the post content into students
    ...req.body
  };
  console.log(req.body);
  students.push(newStudent);
  res.json(newStudent);
});

app.delete('/api/students/:id', (req, res) => {
  students = students.filter(student => student.id != +req.params.id);
  res.json({status: 'success'});
})

app.put('/api/students/:id', (req, res) => {
  const studentToUpdate = students[req.params.id];

  students[req.params.id] = {
    ...studentToUpdate,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    favoriteColor: req.body.favoriteColor
  };

  res.json(students[req.params.id]);
});

app.listen(4000, () => console.log('listening now...'));