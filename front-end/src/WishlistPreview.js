import React from 'react'
import { Link } from 'react-router-dom'
import './WishlistPreview.css'
import {Button} from "react-bootstrap"
import axios from 'axios'


const WishlistPreview = (props) => {
  // test for command url 
  let apiURL = "http://localhost:4000"; 
  if (process.env.REACT_APP_api_base) {
      apiURL = process.env.REACT_APP_api_base;
  }
  const refreshPage = () => {
    window.location.reload()
  }

  const removeWishlist = async () => {
        // removes photocard from wishlist

        await axios.delete(`${apiURL}/removefromwishlist/`+props.details.id+"/"+localStorage.getItem("userId"))

        .then((response) => {
        console.log(response)    
        }, (error) => {
        console.log(error)
        })      
  }


  return (
    <div className="wishlistItem">
      <article className="WishlistPreview">
        <Link to={{
              pathname: `/photocard/${props.details.id}`,
              state: props.details
            }}>
          <img alt={props.details.photocard_name} src={props.details.picture} />
          <h4>{props.details.photocard_name}</h4>

        </Link>
        
      </article>
      <Button className="removeBtn" onClick={() => 
      {
        removeWishlist()
        refreshPage()
      }} 
      style={{ alignSelf: 'center', backgroundColor: '#F4F4ED'}}>
        Remove
      </Button>
    </div>
  )
}

export default WishlistPreview
