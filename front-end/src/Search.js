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

  const [query, setQuery] = React.useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/photocarddata').then(response => {
      setData(response.data)
    })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handle sumbit called");
    let url = "http://localhost:4000/search"
    const name = query;
    // const name = document.getElementById("search").name;
    console.log(event.target);
    if (name){
      url += "?name=" + name;
    }
    console.log(url);
    const data = await axios.get(url);
    console.log(data);
    
    setData(data.data);
  }
  
  // const handleQueryChange = (event) => {
  //   setQuery(event.target.value);
  // }

  return (
    <div className="Search">
      <h1>Search</h1>
      <FilterModal />

      <Grid container direction="column" alignItems="left" justify="left">
        <form onSubmit={handleSubmit}>
          Search: <input type="text" id="search" name="name" className="rcorners" onChange={(event)=>setQuery(event.target.value)}/>
          <input type="submit" value="Search" className="rcorners"/>
        </form>

      </Grid>
      <br></br>
      <div className="center">
        <button>Boy Group</button> <button>Girl Group</button> <button>Solo</button>
        <br></br>
      </div>
      
      {data.map(item => (
        <Link to={{
          pathname: "/photocard",
          state: item
        }}>
          <section id="main-content">
            <img alt="card" src={item.picture} />
            <p4>{item.member}<br />{item.album}<br />{item.group}</p4>

          </section>
        </Link>
      ))}

    </div>
  )
}

export default Search
