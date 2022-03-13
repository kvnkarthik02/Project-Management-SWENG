import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppService } from '../services/app.services'; 

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '60vw',
            margin: `${theme.spacing(0)} auto`,
            justifyContent: 'space-between'
        },
        addProject: {
            justifyContent: 'flex-end',
            margin: theme.spacing(2)
        },
        card: {
            marginTop: theme.spacing(10),
            backgroundColor:"red"
        }
    })
);


function Projects() {
    const classes = useStyles();
    let [projects, setProjects] = useState<any[]>([]);;


    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await AppService.getProjects();
                setProjects(response);
                console.log(response);
            } catch(err) {
                console.log(err);
            }
        };

        getProjects();
      }, [])

    return (


        <Card className={classes.container}>
            <CardContent>
                <h1>Projects</h1>
                <ul>
                    {projects?projects.map(projects => (
                    <li key={projects.ProjectId}>
                        <h1>{projects.ProjectName}</h1>
                        <p>Created:  {projects.CreatedAt}</p>
                        <p>Deadline: {projects.DeadlineDate}</p>

                    </li>
                ))
                : <li>Loading...</li>
                }
                </ul>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.addProject}
                >
                    Add Project
                </Button>
            </CardActions>
        </Card>
    )
}

export default Projects;



