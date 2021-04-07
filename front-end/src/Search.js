// import logo from './logo.svg';
import './Search.css'
import Photocard from './Photocard'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core"
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import { Router } from 'react-router';
import CategoriesModal from './CategoriesModal'
import { Link } from 'react-router-dom';
import FilterModal from './FilterModal'

const Search = (props) => {
  const [data, setData] = React.useState([]);
  const testData = {
    id: 0,
    photocard_name: "Bang Chan Double Sided #2 Photocard",
    group: "Stray Kids",
    member: "Bang Chan",
    album: "GO生(GO LIVE)",
    picture: "../images/image1.jpg",
    picture2: "../images/image2.jpg"
  }

  useEffect(() => {
    axios.get('http://localhost:4000/photocarddata').then(response => {
      setData(response.data)
    })
  }, [])
  return (
    <div className="Search">
      <h1>Search</h1>
      <FilterModal />

      <Grid container direction="column" alignItems="left" justify="left">

        {/* <TextField
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
          /> */}

        <form method="GET" action="/search"
          variant="outlined"
          id="outlined-basic"
          margin="normal">
          Search: <input type="text" name="name" />
          <input type="submit" value="Search" style={{
            "color": "#8093f1",
            "letter-spacing": "normal",
            "word-spacing": "normal",
            "text-transform": "none",
            "text-indent": "0px",
            "text-shadow": "none",
            "display": "inline-block",
            "text-align": "center",
            "margin": "0em",
            "font": "400 11px system-ui",
            "padding": "1px 7px 2px",
            "border-width": "1px",
            "border-style": "solid",
            "border-color": "#8093f1",
          }} />
        </form>

      </Grid>
      <br></br>
      <div className="center">
        <button>Boy Group</button> <button>Girl Group</button> <button>Solo</button>
        <br></br>
      </div>
      <Link to={{
        pathname: `/photocard/${testData.id}`,
        state: testData
      }}>
        <section id="main-content">
          <img src={testData.picture} />
          <p4>{testData.member}<br />{testData.album}<br />{testData.group}</p4>

        </section>
      </Link>
      {data.map(item => (
        <Link to={{
          pathname: `/photocard/${item.id}`,
          state: item
        }}>
          <section id="main-content">
            <img src={item.picture} />
            <p4>{item.member}<br />{item.album}<br />{item.group}</p4>

          </section>
        </Link>
      ))}

    </div>
  )
}

export default Search
