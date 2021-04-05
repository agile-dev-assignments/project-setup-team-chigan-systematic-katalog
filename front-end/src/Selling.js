import React from "react";
import './Selling.css'
import IconButton from "@material-ui/core/IconButton";
import {Grid} from "@material-ui/core"
import { Form, Button, Modal, FormGroup, FormControl, ControlLabel, Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import SellingPreview from './TrendingPreview'
import axios from 'axios'


/* popout the browser and maximize to see more rows! -> */
const Selling = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('loading selling posts')
    axios("https://my.api.mockaroo.com/photocard.json?key=49083ca0")
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(`No more requests today.`)
        console.error(err)
        const backupData = [
          {
            id: 1,
            name: 'Stray Kids Bang Chan',
            price: '$12.44'
          },
          {
            id: 2,
            name: 'NCT Mark',
            price: '$13.35'
          },
          {
            id: 3,
            name: 'BTS RM',
            price: '$15.25'
          },
        ]
        setData(backupData)
      })
  }, [])

  return(
    <div className = "Selling">
      <h1>Selling</h1>
      <Container className = "posts">
        <Row className = "rowposts">
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
        </Row>
        <Row className = "rowposts">
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
        </Row>
        <Row className = "rowposts">
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
        </Row>
        <Row className = "rowposts">
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
        </Row>
        <Row className = "rowposts">
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
          <Col><SellingPreview key={data.id} details={data} /></Col>
        </Row>
      </Container>
    </div>
  )
};

export default Selling;
