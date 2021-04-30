// import IconButton from "@material-ui/core/IconButton";
// import {Grid} from "@material-ui/core"
// import { Link } from 'react-router-dom'

import React from 'react'
import './CategoriesModal.css'
import { Form, Button, Modal} from "react-bootstrap";
import { useState } from 'react';

function CategoriesModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="categoriestext" variant="light" onClick={handleShow}>
        Categories
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <div className="filterTitle">
          <Modal.Title>Categories</Modal.Title>
        </div>
        </Modal.Header>
        <Form>
        <fieldset className="filters">
          <Form.Check
            type="radio"
            id="groupRadio"
            name="groupRadio"
            label="Boy Groups"
          />
          <Form.Check
            type="radio"
            id="groupRadio"
            name="groupRadio"
            label="Girl Groups"
          />
        </fieldset>
        <fieldset className="filters">
        <Form.Label>By Company:</Form.Label>
          <Form.Check
            type="radio"
            id="compRadio"
            name="compRadio"
            label="SM"
          />
          <Form.Check
            type="radio"
            id="compRadio"
            name="compRadio"
            label="YG"
          />
          <Form.Check
            type="radio"
            id="compRadio"
            name="compRadio"
            label="BigHit"
          />
          <Form.Check
            type="radio"
            id="compRadio"
            name="compRadio"
            label="JYP"
          />
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

export default CategoriesModal
