import React, { useRef, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContextII";

import { Link, BrowserRouter } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Login() {
  const Context = React.useContext(AuthContext);
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
      console.log(`Success ~ Email / Pass: ${emailRef.current.value} / ${passwordRef.current.value}`)
      await Context.login(emailRef.current.value, passwordRef.current.value).then(() => {
        BrowserRouter.push('/');
      })
    }

    catch {
      console.log(`Fail ~ Email / Pass: ${emailRef.current.value} / ${passwordRef.current.value}`)
      setError('Failed to log in.');
    }
  }


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
    </>
  )
}