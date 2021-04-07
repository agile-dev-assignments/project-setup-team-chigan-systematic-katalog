
// import logo from './logo.svg';
import './Home.css'
// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TrendingPreview from './TrendingPreview'
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
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('fetching photocards...')
    axios.get('http://localhost:4000/photocarddata')
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(`No more requests allowed today!`)
        console.error(err) 
        const backupData = [
          {
            id: 1,
            name: 'BTS V',
            price: '$10.51'
          },
          {
            id: 2,
            name: 'BTS Jimin',
            price: '$12'
          },
        ]
        setData(backupData)
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
          /> <br/>
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
              {data.map((item) => (
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
