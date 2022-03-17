import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";


import projectsRoutes from './routes/projects.js';

const app = express();
const PORT = 8000;

// connect to db
mongoose.connect('mongodb+srv://admin:vGZL33etvNyiKSNb@cluster0.dszad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => 
    console.log("Connect to DB")
)

app.use(bodyParser.json());

// middleware
app.use('/projects', projectsRoutes);
//app.use('/members', membersRoutes);

app.get('/', (req, res) => {res.send('Hello from homepage!')});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});