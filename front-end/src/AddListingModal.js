
// import IconButton from "@material-ui/core/IconButton";
// import {Grid} from "@material-ui/core"
// import { Link } from 'react-router-dom'

import React from 'react'

import './AddListingModal.css'
import { Form, Button, Modal} from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios'

function AddListingModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setSell(false)
    setTrade(false)
    setLook(false)
    setShow(false)
  }
  const handleShow = () => setShow(true);

  const [locationInput, setLocationInput] = useState("");
  const [shipToInput, setShipToInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const [priceInput, setPriceInput] = useState(0);
  const [shippingInput, setShippingInput] = useState(0);

  const [wantInput, setWantInput] = useState("");

  const [offerInput, setOfferInput] = useState("");

  const [imageInput, setImageInput] = useState("");

  const [sell, setSell] = useState(false);
  const [trade, setTrade] = useState(false);
  const [look, setLook] = useState(false);

  const [listedForInput, setListedForInput] = useState({})
  
  const setListedFor = async () => {
    if (sell === true){
      setListedForInput({
        selling: {
          price: priceInput,
          shipping: shippingInput
        }
      }) 
    }
    else if(trade === true){
      setListedForInput({
        trading: {
          want: wantInput
        }
      })  
      
    }
    else if(look === true){
      setListedForInput({
        looking: {
          offer: offerInput
        }
      })   
    }
  }

  const sendImage = async (e) => {
    const files = e.target.files
    const imageData = new FormData()
    imageData.append('file', files[0])
    imageData.append('upload_preset', process.env.REACT_APP_FOLDER)

    const res = await fetch(process.env.REACT_APP_CLOUD_URL, 
      {
        method: 'POST',
        body: imageData
      }
    )

    const file = await res.json()

    setImageInput(file.secure_url)

  }

  const listing = {
    photocard: {
      name: props.name,
      group: props.grp,
      member: props.member,
      album: props.album
    },
    location: locationInput,
    shipTo: shipToInput,
    description: descriptionInput,
    listedFor: listedForInput,
    image: imageInput
  }


  useEffect(() => {
    if(Object.keys(listedForInput).length !== 0){
      handleSubmit()
    }
  }, [listedForInput])

  const handleSubmit = async (e) => {
    await axios.post("http://localhost:4000/listing", listing)
    .then((response) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    })
    setSell(false)
    setTrade(false)
    setLook(false)
    setShow(false)
  }

  return (
    <>
      <Button className = "pfLogin" onClick={handleShow} style={{ alignSelf: 'center', backgroundColor: '#F4F4ED' }}>
        Add a Listing
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <div className="filterTitle">
          <Modal.Title>Add a Listing</Modal.Title>
        </div>
        </Modal.Header>
        <Form>
        <fieldset className="filters">
          <Form.Group controlId="imageUpload">
          <Form.File label="Photocard Image" onChange={sendImage}/>
          </Form.Group>
        </fieldset>
        <fieldset className="filters">
        <Form.Label>Type of Listing:</Form.Label>
        <br />
          <Form.Check
            className="form-check-inline"
            type="radio"
            id="typeRadio"
            name="typeRadio"
            label="Selling"
            value="sell"
            onClick={() => {
              setSell(true)
              setTrade(false)
              setLook(false)
            }}
          />
          <Form.Check
            className="form-check-inline"
            type="radio"
            id="typeRadio"
            name="typeRadio"
            label="Trading"
            onClick={() => {
              setSell(false)
              setTrade(true)
              setLook(false)
            }}
          />
          <Form.Check
            className="form-check-inline"
            type="radio"
            id="typeRadio"
            name="typeRadio"
            label="Looking For"
            onClick={() => {
              setSell(false)
              setTrade(false)
              setLook(true)
            }}
          />
        </fieldset>

        <fieldset className="filters">
        <Form.Group controlId="forSale" hidden={ !sell ?  true : false }>
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder="Price" onChange={(e) => setPriceInput(e.target.value)}/>
          <Form.Label>Shipping</Form.Label>
          <Form.Control placeholder="Shipping" onChange={(e) => setShippingInput(e.target.value)}/>
        </Form.Group>
        </fieldset>

        <fieldset className="filters">
        <Form.Group controlId="forTrade" hidden={ !trade ?  true : false }>
          <Form.Label>Want</Form.Label>
          <Form.Control placeholder="Want" onChange={(e) => setWantInput(e.target.value)}/>
        </Form.Group>
        </fieldset>

        <fieldset className="filters">
        <Form.Group controlId="lookingFor" hidden={ !look ?  true : false }>
          <Form.Label>Offer</Form.Label>
          <Form.Control placeholder="Offer" onChange={(e) => setOfferInput(e.target.value)}/>
        </Form.Group>
        </fieldset>


        {/* <fieldset className="filters">
        <Form.Group controlId="cardLabel">
          <Form.Label>Card Name</Form.Label>
          <Form.Control placeholder="Card Name" />
        </Form.Group>
        </fieldset>
        <fieldset className="filters">
        <Form.Group controlId="cardInfo">
          <Form.Label>Group</Form.Label>
          <Form.Control placeholder="Group" />
          <Form.Label>Member</Form.Label>
          <Form.Control placeholder="Member" />
          <Form.Label>Album</Form.Label>
          <Form.Control placeholder="Album" />
        </Form.Group>
        </fieldset>
        <fieldset className="filters">
        <Form.Group controlId="cardPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder="Price" />
        </Form.Group>
        </fieldset> */}
        <fieldset className="filters">
        <Form.Group controlId="cardLocationInfo">
          <Form.Label>Location</Form.Label>
          <Form.Control placeholder="Location" onChange={(e) => setLocationInput(e.target.value)}/>
          <Form.Label>Ships To</Form.Label>
          <Form.Control placeholder="Ships To" onChange={(e) => setShipToInput(e.target.value)}/>
        </Form.Group>
        </fieldset>
        <fieldset className="filters">
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" onChange={(e) => setDescriptionInput(e.target.value)}/>
        </Form.Group>
        </fieldset>
        </Form>
        <Modal.Footer className="position">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="filter-button" variant="light" onClick={
              setListedFor
          }>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddListingModal
