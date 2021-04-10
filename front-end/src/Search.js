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
    id: 1,
    photocard_name: "Bang Chan Double Sided #2 Photocard",
    group: "Stray Kids",
    member: "Bang Chan",
    album: "GO生(GO LIVE)",
    picture: "images/image1.jpg",
    picture2: "images/image2.jpg"
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

        <form method="GET" action="/search">
          Search: <input type="text" name="name" className="rcorners"/>
          <input type="submit" value="Search" className="rcorners"/>
        </form>

      </Grid>
      <br></br>
      <div className="center">
        <button>Boy Group</button> <button>Girl Group</button> <button>Solo</button>
        <br></br>
      </div>
      <Link to={{
        pathname: "/photocard",
        state: testData
      }}>
        <section id="main-content">
          <img alt="Photocard 1" src="images/image1.jpg" />
          <p4>Member<br />Album<br />Group</p4>

        </section>
      </Link>
      {data.map(item => (
        <Link to={{
          pathname: "/photocard",
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
