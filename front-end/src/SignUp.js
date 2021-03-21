// referenced source: https://serverless-stack.com/chapters/create-a-SignUp-page.html
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
// import logo from './logo.svg';
import './SignUp.css'


function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function validateForm() {
    return username.length > 0 && email.length > 0 && password.length > 0 && confirm.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirm) {
      alert("Passwords don't match");   
    } else {
      //link with backend account creation
    }
  }

  return (
    <div className="SignUp">
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <p>Username</p>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </Form.Group>
        <Form.Group size="lg" controlId="email">
          <p>Email</p>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <p>Password</p>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="confirm">
          <p>Confirm Password</p>
          <Form.Control
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Form.Group>
    
        <br/>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          SignUp
        </Button>
        <br/>
        <links>
          <Link to="/login">Already have an account?</Link>
        </links>
      </Form>
      
    </div>
  );
};

export default SignUp
