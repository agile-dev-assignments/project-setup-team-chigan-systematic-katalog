import React from 'react'
import './WishSellTabs.css'
import IconButton from "@material-ui/core/IconButton";
import {Grid} from "@material-ui/core"
import { Form, Button, Modal, FormGroup, FormControl, ControlLabel, Tabs, Tab } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import ReactDOM from 'react-dom'
import Wishlist from './Wishlist'
import Selling from './Selling'


const WishSellTabs = () => {
{/*function ControlledTabs() {
  const [key, setKey] = useState('home');*/}

  return (
    <div className = "WishSellTabs">
    <Tabs defaultActiveKey="wishlist" id="tabs">
      <Tab eventKey="wishlist" title="Wishlist">
        <Wishlist />
      </Tab>
    <Tab eventKey="selling" title="Selling">
        <Selling />
      </Tab>
    </Tabs>
    </div>
  );
}


export default WishSellTabs;
