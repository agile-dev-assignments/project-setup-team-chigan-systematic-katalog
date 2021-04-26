import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
// import logo from './logo.svg';
import './SignUp.css'
import axios from "axios"


function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");


  const signUpS = () => {
    axios.post("http://localhost:4000/signups", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
}; 

  // const signUp = () => {
  //   axios({
  //     method: "POST", 
  //     data: {
  //       username: setUsername,
  //       password: setPassword,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:4000/signup",
  //   }).then((res) => console.log(res))
  // }

  // function validateForm() {
  //   return username.length > 0 && email.length > 0 && password.length > 0 && confirm.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (password !== confirm) {
  //     alert("Passwords don't match");   
  //   } else {
  //     //link with backend account creation
  //   }
  // }

  // const handleSubmit = async (e) => {
  //   await axios.post("http://localhost:4000/signup", {data: {
  //     username: setUsername,
  //     password: setPassword,
  //   }}) 
  // }

  return (
    <div className="SignUp">
      <h1>SignUp</h1>
      {/* <Form onSubmit={handleSubmit}> */}
      {/* <Form action="/signup" method="POST">  */}
      <Form > 
        <Form.Group size="lg" controlId="username">
          <p>Username</p>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          </Form.Group>
        {/* <Form.Group size="lg" controlId="email">
          <p>Email</p>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            // required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group> */}

        <Form.Group size="lg" controlId="password">
          <p>Password</p>
          <Form.Control
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* <Form.Group size="lg" controlId="confirm">
          <p>Confirm Password</p>
          <Form.Control
            type="password"
            value={confirm}
            // required
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Form.Group> */}
    
        <br/>
        {/* disabled={!validateForm()} */}
        <Button block size="lg" onClick={signUpS} >
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
