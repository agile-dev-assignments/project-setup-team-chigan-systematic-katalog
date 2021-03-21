
// import logo from './logo.svg';
import './Home.css'
// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import './AnimalsList.css'
// import AnimalPreview from './AnimalPreview'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import { Link } from 'react-router-dom';

const logo = ["logo.png"]

const Home = (props) => {
  const [data, setData] = useState([])
  return (
    <div>

    <div className="Home">
      <img alt="logo" src={logo} />
      <h1>katalog</h1>

      <Grid container direction="column" alignItems="center" justify="center">
      <p style={{
            'white-space': 'pre-wrap'
            }}>{" \n "}</p>
      <Button style={{alignSelf:'center',width:100,backgroundColor:'#F4F4ED'}}>
                    Login/Signup
      </Button>

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
          />

            <div className="Trending">
            <p style={{
            'white-space': 'pre-wrap'
            }}>{" \n \n \n "}</p>
              <h3> Top 5 Trending Photocards</h3>
              <section className="main-content">
                <img alt="Photocard 1" src="images/image1.jpg" style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 3,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/> 
            <img alt="Photocard 2" src="images/image3.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,

            width: 100
          }} />
            <img alt="Photocard 3" src="images/image4.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/>
            <img alt="Photocard 4" src="images/image4.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/>
            <img alt="Photocard 5" src="images/image4.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/>

          </section>
            </div>

            <div className="Newly Added">
            <p style={{
            'white-space': 'pre-wrap'
            }}>{" \n \n "}</p>
              <h3> Newly Added</h3>
              <section className="main-content">
                <img alt="Photocard 1" src="images/image1.jpg" style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/>
          <img alt="Photocard 2" src="images/image3.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }} />
          <img alt="Photocard 3" src="images/image4.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/>
                          <img alt="Photocard 4" src="images/image4.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            borderWidth: 5,
            borderColor: '#B388EB',
            height: 100,
            width: 100
          }}/>
            <img alt="Photocard 5" src="images/image4.jpg"style={{
            resizeMode: "repeat",
            display: "flex",
            padding: 1,
            height: 100,
            borderWidth: 5,
            borderColor: '#B388EB',
            width: 100
          }}/>

          </section>
            </div>
        </Grid>
    </div>
  </div>
  )
}

export default Home
