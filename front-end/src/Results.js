import React from 'react'
// import logo from './logo.svg';
import './Results.css'
import Photocard from './PhotocardPage'

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import PhotocardPage from './PhotocardPage';



const Results = (props) => {
  return (
    <div className="Results">

      <section className="above search">
        <p id = "resultstext">Results</p>
        <button id = "filterstext">Filters</button>
      </section>
      
      <Grid container direction="column" alignItems="left" justify="left">

        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search..."
          margin = "normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
          )
        }}
          />
        
        </Grid>
        <p> Filter 1 <a></a> Filter 2 <a></a> Filter 3</p>

      <section id="main-content">
        <img alt="Photocard 1" src="images/image1.jpg" />
        <p4>Member<br />Album<br />Group</p4>

      </section>
      
      <section id="middle-content"></section>

      <section id="main-content">
        <img alt="Photocard 2" src="images/image3.jpg" />
        <p4>Member<br />Album<br />Group</p4>

      </section>

      <section id="middle-content"></section>

      <section id="main-content">
        <img alt="Photocard 3" src="images/image4.jpg" />
        <p4>Member <br /> Album <br /> Group</p4>

      </section>
    </div>
  )
} 

export default Results
