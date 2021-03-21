import React from 'react'
// import logo from './logo.svg';
import './Results.css'
import Photocard from './Photocard'

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core"



const Results = (props) => {
  return (
    <div className="Results">

      <h1>Search</h1> 
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


      <section className="main-content">
        <img alt="Photocard 1" src="https://picsum.photos/200?page=search" />
        <Photocard />
      </section>
    </div>
  )
} 

export default Results
