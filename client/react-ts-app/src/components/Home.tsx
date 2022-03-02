import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../routing';

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
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            alignItems: "center",
            justifyContent: "center",
            textAlign: 'center',
            background: '#212121',
            color: '#fff',
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
);

const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Card className={classes.card}>
            <CardHeader className={classes.header} title="Propylon Project Management Tool" />
            <CardContent>
                <h1>Home</h1>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.loginBtn}
                    onClick={() => { navigate(ROUTE.LOGIN); }}
                >
                    Login
                </Button>
            </CardActions>
        </Card>
    );
};

export default Home;
