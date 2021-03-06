// referenced source: https://serverless-stack.com/chapters/create-a-login-page.html
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from 'react-router-dom'
import Checkboxes from "./Checkboxes";
import axios from 'axios'
// import logo from './logo.svg';
import './Login.css'



function Login(props) {
  // test for command url 
  let apiURL = "http://localhost:4000"; 
  if (process.env.REACT_APP_api_base) {
      apiURL = process.env.REACT_APP_api_base;
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // this.state = {
  //   isLoggedIn: true
  // }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`${apiURL}/login`, {
      email: email,
      password: password
    }).then((response) => {
      localStorage.setItem("userId", response.data.body._id)
      localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo))
      localStorage.setItem('token', response.data.token)
      history.push("/profile");
      //localStorage.setItem('user',JSON.parse(JSON.stringify(response.data.userInfo)))
      // history.push("/profile");

    //   history.push({
    //     pathname:"/profile",
    //     userInfo: userInformation
        
    // })

   // history.push("/profile",{userInformation})

    // history.push("/profile")
      window.location.reload();
      // this.state = {
      //   isLoggedIn: true
      // }
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  return (
    <div className="Login">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} method="POST">
        <Form.Group size="lg" controlId="email">
          <p>Username/Email</p>
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
          <Link to="/signup">Sign Up</Link>
        </links>
        
        <Checkboxes className='center'/>
        <br/>
        <Button block size="lg" type="submit" disabled={!validateForm()} >
          Login
        </Button>
        <br/>
      </Form>
    </div>
  );
};

export default Login
