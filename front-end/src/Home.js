import React from 'react'
// import logo from './logo.svg';
import './Home.css'

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";

const Home = (props) => {
  return (

    <div className="Home">
      <img alt="logo" src="https://picsum.photos/200?page=home" />
      <h1>katalog</h1>

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
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
          )
        }}
          />
        </Grid>

      <section className="main-content">

      </section>
    </div>
  )
}


export default Home
