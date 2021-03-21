import React from 'react'
// import logo from './logo.svg';
import './Search.css'
import Photocard from './Photocard'

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Router } from 'react-router';

import { Link } from 'react-router-dom';



const Search = (props) => {
  return (
    <div className="Search">

      <h1>Search</h1> 
      <Grid container direction="column" alignItems="center" justify="center">

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
        <img alt="Photocard 1" src="images/image1.jpg" />
        <img alt="Photocard 1" src="images/image3.jpg" />
        <img alt="Photocard 1" src="images/image4.jpg" />
      </section>
    </div>
  )
} 

export default Search