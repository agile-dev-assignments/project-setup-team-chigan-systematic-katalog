import React from 'react'
// import logo from './logo.svg';
import './Home.css'

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import { Link } from 'react-router-dom';

const logo = ["logo.png"]

const Home = (props) => {
  return (
    <div>

    <div className="Home">
      <img className="logo" alt="logo" src={logo}/>
      <h1>katalog</h1>

      <Grid container direction="column" alignItems="center" justify="center">

      <Button style={{alignSelf:'center',width:100,backgroundColor:'#F4F4ED'}}>
                    Login/Signup
      </Button>

        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search..."
          margin = "normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Link to="/results">
                    <SearchIcon />
                  </Link>
                </IconButton>
              </InputAdornment>
          )
        }}
          />

        <h3>Trending</h3>
        
        </Grid>

      <section className="main-content">
      </section>
    </div>


  </div>
  )
}


export default Home
