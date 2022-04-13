import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfigModule from "../../tailwind.config.js";
import { useForm } from '@mantine/form'
import { PasswordInput, TextInput, Card, Button, Title, Box, MantineProvider } from '@mantine/core';
import { string } from 'yup';

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
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);

//state type

type State = {
  username: string
  password: string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload
      };
  }
}

interface FormValues {
  username: string; // regular field, same as inferred type
  password: string;
  role: 'user' | 'admin'; // union, more specific than inferred type (string)
  // age: number | undefined; // values that may be undefined cannot be inferred
}

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }

  const form = useForm<{ username: string; password: string }>({
    initialValues: { username: '', password: '' },
    validate: (values) => ({
      username: values.username.length < 2 ? 'Too short name' : null,
      age:
        values.password === undefined
          ? 'password is required'
          : values.password.length < 8
            ? 'Your password must be at least 8 characters'
            : null,
    }),
  });



  return (
    <>
      <Box sx={{ maxWidth: 340 }} mx="auto">
        <form className={classes.container} noValidate autoComplete="off">
          <Card shadow="sm" p="lg" className={classes.card}>
            <Card.Section component="header" title="Login" className={classes.header}>Login</Card.Section>
            <Card.Section component="div">
              <div>
                <TextInput
                  error={state.isError}
                  id="username"
                  type="email"
                  label="Username"
                  placeholder="Username"
                  onChange={handleUsernameChange}
                  onKeyPress={handleKeyPress}
                />
                <TextInput
                  error={state.isError}
                  id="passsword"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button variant="light" color="blue" className={classes.loginBtn} fullWidth style={{ marginTop: 14 }}
                onClick={handleLogin}
                disabled={state.isButtonDisabled}>
                Login
              </Button>

            </Card.Section>

          </Card>
        </form >
      </Box>
      <MantineProvider
        theme={{
          fontFamily: 'Lexend Deca, sans-serif',
          headings: { fontFamily: 'Lexend Deca, sans-serif' },
          colors: {
            'wavelightgreen': ['#20DF7F'],
            'wavelightgrey': ["#224957"],
            'wavedarkgrey': ["#093545"],
          },
          primaryColor: 'wavelightgrey'
        }}
      >
        <Title order={1} color="wavelightgrey">Log In</Title>
        <Button color="wavelightgrey">Verdana button</Button>
      </MantineProvider>

    </>
  );
}

export default Login;