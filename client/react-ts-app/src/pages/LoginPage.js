import React, { useRef, useState, useContext } from "react";
import { useAuth } from "../contexts/AuthContextII";

import { Link, BrowserRouter, Navigate } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap"



export default function Login() {

    const { login, logout } = useAuth();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit() {

        try {
            console.log(`Attempting to log in via Firebase...`)
            await login(emailRef.current.value, passwordRef.current.value).then(() => {
            }).catch(err => (console.log(JSON.stringify(err))));
        }

        catch (e) {
            console.log(e);
            console.log('Failed to log in.');
        }
    }

    async function getOut() {
        try {
            console.log(`Signing out....`);
            await logout().then((res) => {
                console.log(`Logged out successfully. Response: ${res}`)
            }).catch(err => (console.log(JSON.stringify(err))));
        }
        catch {
            console.log(`Couldn't reach Firebase to sign out.`)
        }
    }


    return (
        <>
            <div>
                <input ref={emailRef} placeholder="email" />
                <input ref={passwordRef} placeholder="password" />
                <button onClick={handleSubmit}> Submit </button>
                <button onClick={getOut}> Log Out </button>
            </div>
            {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={ handleSubmit }>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <Button onClick={ getOut }>Sign Out</Button> */}
        </>
    )
}