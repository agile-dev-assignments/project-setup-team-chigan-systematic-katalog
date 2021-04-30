import React from "react";
import './SellingPost.css'
// import IconButton from "@material-ui/core/IconButton";
// import {Grid} from "@material-ui/core"
// import { Form, Button, Modal, FormGroup, FormControl, ControlLabel, Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom'
// import axios from 'axios'


const SellingPost = (props) => {

  const location = useLocation()
  const data = location.state

  return (
      <div className="SellingPost">
          <h3>{data.name}</h3>
          <img id="photocard" alt={data.name} src={data.pic1} />
          <h4>Group: {data.group}</h4>
          <h4>Member: {data.member}</h4>
          <h4>Album: {data.album}</h4>
          <h4>Price: {data.price}</h4>

      </div>
  )
}

export default SellingPost
