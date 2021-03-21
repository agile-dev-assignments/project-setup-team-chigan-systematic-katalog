// referenced source: https://serverless-stack.com/chapters/create-a-SignUp-page.html
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import Checkboxes from "./Checkboxes";
// import logo from './logo.svg';
import './SignUp.css'


function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="SignUp">
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit}>
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

        <links>
          <Link to="/">Forgot Password</Link>
          <br></br>
          <Link to="/">Sign Up</Link>
        </links>
        
        <Checkboxes className='center'/>
        <br/>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          SignUp
        </Button>
        <br/>
      </Form>
    </div>
  );
};

export default SignUp
