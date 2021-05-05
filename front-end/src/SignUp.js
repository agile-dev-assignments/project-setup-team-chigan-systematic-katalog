import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link,useHistory } from 'react-router-dom'
// import logo from './logo.svg';
import './SignUp.css'
import axios from "axios";


function SignUp(props) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const history = useHistory();

  const signUpS = () => {
    axios.post("http://localhost:4000/signups", {
        username: username,
        name: name,
        password: password,
        confirm: confirm,
        email: email
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        history.push("/profile");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    // axios({
    //   method: "POST",
    //   data: {
    //     username: setUsername,
    //     password: setPassword,
    //   },
    //   withCredentials: true,
    //   url: "http://localhost:4000/signup",
    // }).then((res) => console.log(res))
  };
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
      <h1>Sign Up</h1>
      {/* <Form onSubmit={handleSubmit}> */}
      <Form>
        <Form.Group size="lg" controlId="username">
          <p>Username</p>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </Form.Group>

          <Form.Group size="lg" controlId="name">
          <p>Name</p>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <br />
        {/* disabled={!validateForm()} */}
        <Button onClick={signUpS}>

          Sign Up
        </Button>
        <br/>
        <links className="loginbutton">
          <Link to="/login">Already have an account?</Link>
        </links>
      </Form>
      
    </div>
  );
};

export default SignUp
