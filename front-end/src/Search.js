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
  console.log("search props" + props);
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState('');

  // if (this.props.location.state.key){
  //   setData(data);
  // }

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

  const handleFilter = async (query) => {
    // event.preventDefault();
    console.log("handle filter called");
    let url = "http://localhost:4000/filter"
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
      <FilterModal />

      <Grid container direction="column" alignItems="left" justify="left">
        <form onSubmit={handleSubmit}>
          Search: <input type="text" id="search" name="name" className="rcorners" onChange={(event)=>setQuery(event.target.value)}/>
          <input type="submit" value="Search" className="rcorners"/>
        </form>

      </Grid>
      <br></br>
      <div className="center">
        <button onClick={(event)=>{
          handleFilter("boy_group");
          }}>Boy Group</button>
        <button onClick={(event)=>{
          handleFilter("girl_group");
          }}>Girl Group</button> 
        <button onClick={(event)=>{
          handleFilter("solo");
          }}>Solo</button>
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
