import React from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import { photos } from "./photos";
import './Wishlist.css'
// import IconButton from "@material-ui/core/IconButton";
import {Grid} from "@material-ui/core"
// import { Form, Button, Modal, FormGroup, FormControl, ControlLabel, Tabs, Tab, Container, Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import { useEffect } from 'react';
// import ReactDOM from 'react-dom'
import axios from 'axios'
import WishlistPreview from './WishlistPreview'

/* popout the browser and maximize to see more rows! -> */
const Wishlist = (props) => {
  // test for command url 
  let apiURL = "http://localhost:4000"; 
  if (process.env.REACT_APP_api_base) {
      apiURL = process.env.REACT_APP_api_base;
  }
  const [data, setData] = React.useState([])

  // const testData = {
  //   id: 1,
  //   photocard_name: "Bang Chan Double Sided #2 Photocard",
  //   group: "Stray Kids",
  //   member: "Bang Chan",
  //   album: "GO生(GO LIVE)",
  //   picture: "images/image1.jpg",
  //   picture2: "images/image2.jpg"}

    useEffect(() => {
      console.log('fetching photocards...')

      axios.get(`${apiURL}/returnwishlist`)

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

    const checkEmpty = () =>{
      if(data.length >= 1){
        return [
          data.map((item) => (
            <WishlistPreview key={item.id} details={item} />
          ))
        ]
      }
      else{
        return [
          <h4>Empty Wishlist</h4>
        ]
      }
    }


    return(
      <div className = "Wishlist">
        <h1>My Wishlist</h1>
        <Grid container spacing={4}>
        <Grid item xs={6}>
        <section className="main-content">         
          {checkEmpty()}
          </section>
          </Grid>
        </Grid>
      </div>
    )
  };

export default Wishlist;
