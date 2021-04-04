import React from 'react'
import './Popup.css'
import IconButton from "@material-ui/core/IconButton";
import {Grid} from "@material-ui/core"
import { Form, Button, Modal, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState } from 'react';

function PopupModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="categoriestext" variant="light" onClick={handleShow}>
        Edit Username
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <div className="filterTitle">
          <Modal.Title>Edit Username</Modal.Title>
        </div>
        </Modal.Header>
        <Form>
        <fieldset className="filters">
          <Form>
              <input type = "text"/>
          </Form>
        </fieldset>

        </Form>
        <Modal.Footer className="position">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="filter-button" variant="light" onClick={handleClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupModal
