//install express "install i express" and imported modules
const express = require("express");  
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const Task = require("./models/task");
const TodoList = require("./models/to-do");
const path = require("path");

app.listen(port, () => console.log(`now listen on ${port}`)); //confirms user is using port 8080

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//if path is "/" then show the book list page
app.get('/', (req, res) => {
    res.render("list.ejs", {tasks: list.tasks});
});

//if path is "/add" then show the 
app.get('/add', (req, res) => {
    res.render("add.ejs");
});


const list = new TodoList();

app.post('/add', (req, res) => {
   const newTask = new Task(req.body.title, req.body.desc, req.body.dueDate);
   
   list.addTask(newTask);
   res.redirect('/');
});


app.get('/tasks/:id', (req, res) => {
   const id = req.params.id;
   res.render('task.ejs', {task: list.tasks[id]});
});

app.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    
    list.deleteTask(id);
    res.redirect('/');
});

app.get('/completed/:id', (req, res) => {
   const id = req.params.id;
   
   list.updateStatus(id);
   res.redirect('/');
});
