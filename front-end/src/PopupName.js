import React from 'react'
import './Popup.css'
import { Form, Button, Modal} from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';

function PopupModalName() {
  // test for command url 
  let apiURL = "http://localhost:4000"; 
  if (process.env.REACT_APP_api_base) {
      apiURL = process.env.REACT_APP_api_base;
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {
    await axios.post(`${apiURL}/update/${localStorage.getItem("userId")}`,{name:input})
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    setShow(false);
  } 
  return (
    <>
      <Button id="categoriestext" variant="light" onClick={handleShow}>
        Edit Name
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <div className="filterTitle">
          <Modal.Title>Edit Name</Modal.Title>
        </div>
        </Modal.Header>

        {/* <Form> */}
        <fieldset className="filters">
          <Form>
              <input type = "text" onChange={(e) => setInput(e.target.value)}/>
          </Form>
        </fieldset>
        {/* </Form> */}

        <Modal.Footer className="position">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="filter-button" variant="light" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <br /><br />
    </>
  );
}

export default PopupModalName
