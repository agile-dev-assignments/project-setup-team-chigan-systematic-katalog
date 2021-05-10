// import logo from './logo.svg';
import './Search.css'
// import Photocard from './Photocard'
import axios from 'axios'
import React, { useEffect } from 'react'
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core"
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import { Router } from 'react-router';
// import CategoriesModal from './CategoriesModal'
import { Link } from 'react-router-dom';
import FilterModal from './FilterModal'

const Search = (props) => {
  console.log(process.env.REACT_APP_api_base);
  // test for command url 
  let apiURL = "http://localhost:4000"; 
  if (process.env.REACT_APP_api_base) {
      apiURL = process.env.REACT_APP_api_base;
  }  
  const [data, setData] = React.useState([]);

  const [query, setQuery] = React.useState('');

  useEffect(() => {
    axios.get(`${apiURL}/search`).then(response => {
      setData(response.data)
    })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handle sumbit called");
    let url = `${apiURL}/search`
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

  const handleFilter = async (query) => {
    // event.preventDefault();
    console.log("handle filter called");
    let url = `${apiURL}/filter`
    const groupType = query;
    console.log("query" + query);
    if (groupType){
      url += "?groupType=" + groupType;
    }
    console.log(url);
    const data = await axios.get(url);
    console.log(data);
    
    setData(data.data);
  }

  return (
    <div className="Search">
      <h1>Search</h1>
      {/* <FilterModal /> */} <br/>

      <Grid container direction="column" alignItems="left" justify="left">
        <form onSubmit={handleSubmit}>
          Search: <input type="text" id="search" name="name" className="rcorners" onChange={(event)=>setQuery(event.target.value)}/>
          <input type="submit" value="Search" className="rcorners"/>
        </form>

      </Grid>
      <Grid>
        <button onClick={(event)=>{
          handleFilter("boy_group");
          }} className="rcorners">Boy Group</button>
        <button onClick={(event)=>{
          handleFilter("girl_group");
          }}className="rcorners">Girl Group</button> 
        <button onClick={(event)=>{
          handleFilter("solo");
          }}className="rcorners">Solo</button>
        <br></br>
      </Grid>
      
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
