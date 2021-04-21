// import IconButton from "@material-ui/core/IconButton";
// import {Grid} from "@material-ui/core"
// import { Link } from 'react-router-dom'

import React from 'react'
import './AddListingModal.css'
import { Form, Button, Modal} from "react-bootstrap";
import { useState } from 'react';

function AddListingModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form.File label="Photocard Image" />
          </Form.Group>
        </fieldset>
        {/*<fieldset className="filters">
        <Form.Label>Type of Listing:</Form.Label>
        <br />
          <Form.Check
            className="form-check-inline"
            type="radio"
            id="typeRadio"
            name="typeRadio"
            label="Selling"
          />
          <Form.Check
            className="form-check-inline"
            type="radio"
            id="typeRadio"
            name="typeRadio"
            label="Trading"
          />
          <Form.Check
            className="form-check-inline"
            type="radio"
            id="typeRadio"
            name="typeRadio"
            label="Looking For"
          />
        </fieldset>*/}
        <fieldset className="filters">
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
        </fieldset>
        </Form>
        <Modal.Footer className="position">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="filter-button" variant="light" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddListingModal
