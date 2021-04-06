
// import logo from './logo.svg';
import './Home.css'
// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TrendingPreview from './TrendingPreview'
import PhotocardPage from './PhotocardPage'
import NewlyAddedPreview from './NewlyAddedPreview'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import CategoriesModal from './CategoriesModal'
import { Link } from 'react-router-dom';

const logo = ["logo.png"]

const Home = (props) => {
  const [data, setData] = React.useState([])

  const testData = {
    id: 1,
    photocard_name: "Bang Chan Double Sided #2 Photocard",
    group: "Stray Kids",
    member: "Bang Chan",
    album: "GO生(GO LIVE)",
    picture: "images/image1.jpg",
    picture2: "images/image2.jpg"}

  //useEffect(() => {

  // axios("https://my.api.mockaroo.com/photocard.json?key=49083ca0")
  //    .then((response) => {
  //      setData(response.data)
  //    })
  // }, []) 

  useEffect(() => {
    axios.get('http://localhost:4000/photocarddata').then(response => {
      setData(response.data)
    })
  }, [])

  return (
    <div>

    <div className="Home">
      <img alt="logo" src={logo} />
      <h1>katalog</h1>

      <Grid container direction="column" alignItems="center" justify="center">
      <p style={{
            'white-space': 'pre-wrap'
            }}>{" \n "}</p>


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
          <CategoriesModal />

            <div className="Trending">

            <p style={{
            'white-space': 'pre-wrap'
            }}>{" \n \n \n "}</p>
            
              <h3> Top 5 Trending Photocards</h3>
              <section className="main-content">
                {data.map((item) => (
                  <TrendingPreview key={item.id} details={item} />
                ))}
          </section>
            </div>

            <div className="Newly Added">
            <p style={{
            'white-space': 'pre-wrap'
            }}>{" \n \n "}</p>
              <h3> Newly Added</h3>
              <section className="main-content">
              {
              data.map((item) => (
                  <NewlyAddedPreview key={item.id} details={item} />
                ))}


          </section>
            </div>
        </Grid>
    </div>
  </div>
  )
}

export default Home
