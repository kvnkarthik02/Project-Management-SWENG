import React from 'react';
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

const Projects = () => {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardContent>
                <h1>Projects</h1>
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

export default Projects