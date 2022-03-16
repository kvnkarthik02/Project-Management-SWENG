import express from "express";
import bodyParser from 'body-parser';
// import "./config/firebase-config; 
import projectsRoutes from './routes/projects.js';
import mongoose from "mongoose";
import {} from 'dotenv/config';
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/projects', projectsRoutes);

app.get('/', (req, res) => {res.send('Hello from homepage!')});

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true}, 
    ()=> console.log('connected to db')
);

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 