import express from "express";
import bodyParser from 'body-parser';

import projectsRoutes from './routes/projects.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/projects', projectsRoutes);

app.get('/', (req, res) => {res.send('Hello from homepage!')});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});