import React from 'react'
import './FilterModal.css'
import IconButton from "@material-ui/core/IconButton";
import {Grid} from "@material-ui/core"
import { Form, Button, Modal, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState } from 'react';

function FilterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="filterstext" variant="light" onClick={handleShow}>
        Filters
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <div className="filterTitle">
          <Modal.Title>Filters</Modal.Title>
        </div>
        </Modal.Header>
        <Form className="filterPosition">
          {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check className="filterSpace" inline label="Filter 1" type={type} id={`inline-${type}-1`} />
            <Form.Check className="filterSpace" inline label="Filter 2" type={type} id={`inline-${type}-2`} />
            <Form.Check className="filterSpace" inline label="Filter 3" type={type} id={`inline-${type}-3`} />
            </div>
            ))}
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

export default FilterModal
