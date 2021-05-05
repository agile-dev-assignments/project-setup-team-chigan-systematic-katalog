import React, { useState, useEffect } from 'react'
import './PrimaryNav.css'
 import { useHistory } from 'react-router-dom'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
//import { slide as Menu } from 'react-burger-menu'


const PrimaryNav = () => {

        const history = useHistory();
        const logOut = () =>{
          localStorage.removeItem('token')
          setLoggedIn(localStorage.getItem("token") !== null)
          history.push("/login");
        }


        const [username, setUsername] = useState(localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).username : "");

        // const [username, setUsername] = useState(JSON.parse(localStorage.getItem("userInfo")))
        
        // had    setLoggedIn    inside const
        const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") !== null)

        // const changeNav = () =>{
        //   if(loggedIn){
        //     return [
        //       <Nav.Link className="user" href="/profile">Name</Nav.Link>,
        //       <Button className="nav-button" variant="outline-light" size="sm" onClick={logOut} href="localhost:4000/logout">Log Out</Button>
        //     ]
        //   }
        //   else{
        //     return [
        //       <Button className="nav-button" variant="outline-light" size="sm" href="/login">Login</Button>,
        //       <Button className="nav-button" variant="outline-light" size="sm" href="/signup">Signup</Button>
        //     ]
        //   }
        // }

        const changeProfile = () =>{
          if(loggedIn){
            return [
              <Nav.Link href="/profile">Profile</Nav.Link>
            ]
          }
          else{
            return [
              <Nav.Link href="/login">Profile</Nav.Link>
            ]
          }
        }

        return(
            <div>
              <Navbar className="nav-color" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                  <img
                    src="/favicon.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
                <Navbar.Brand href="/">Katalog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                  {
                    loggedIn && <Nav.Link href="/profile">Profile</Nav.Link>
                  }
                  {
                    !loggedIn && <Nav.Link href="/login">Profile</Nav.Link>
                  }
                  <Nav.Link href="/faq">FAQ</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                
                <Form inline>
                  {
                    loggedIn && <Nav.Link className="user" href="/profile">@{username}</Nav.Link>
                  }
                  {
                    loggedIn && <Button className="nav-button" variant="outline-light" size="sm" onClick={logOut}>Log Out</Button>

                    //loggedIn && <Button className="nav-button" variant="outline-light" size="sm" onClick={() => setLoggedIn(localStorage.getItem("token") !== null), logOut} href="localhost:4000/logout">Log Out</Button>
                  }
                  {
                    !loggedIn &&  <Button className="nav-button" variant="outline-light" size="sm" href="/login">Login</Button>
                  }
                  {
                    !loggedIn &&  <Button className="nav-button" variant="outline-light" size="sm" href="/signup">Signup</Button>
                  }
                </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>
        )

}

export default PrimaryNav;



// if we need hamburger side nav-bar element
// const PrimaryNav = (props) => {
//   return(
//     <Menu>
//       <a id="home" className="menu-item" href="/">Home</a>
//       <a id="search" className="menu-item" href="/search">Search</a>
//       <a id="profile" className="menu-item" href="/profile">Profile</a>
//       <a id="faq" className="menu-item" href="/faq">FAQ</a>
//       <a id="about" className="menu-item" href="/about">About</a>
//       <a id="animals" className="menu-item" href="/animals">Animals</a>
//     </Menu>
//   );
// }
//
// export default PrimaryNav
