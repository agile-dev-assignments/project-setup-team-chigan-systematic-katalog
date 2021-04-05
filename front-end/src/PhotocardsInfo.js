
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg'
import './PhotocardsInfo.css'




const Photocards = (props) => {
	const [activePage, setActivePage] = React.useState(0)
	return (
		<div className = "photocard-container">
			<div className = "menu">
				<p onClick = {() => setActivePage(0)}>Selling</p>
				<p onClick = {() => setActivePage(1)}>Trading</p>
				<p onClick = {() => setActivePage(2)}>Looking For</p>
			</div>
			{
  				activePage===1 && <Trading/>
			}

			{
  				activePage===0 && <Selling/>
			}

			{
  				activePage===2 && <LookingFor/>
			}
			
		</div>
	)
}


const sortAccording = {
	1: "date",
	2: "date",
	3: "price",
	4: "price"
}

const sortData = (type, setData, data) => {
	const sortType =sortAccording[type]
	const sorted = (type == 1 || type == 3 ) ? [...data].sort((a, b) => b[sortType] - a[sortType]) : [...data].sort((b, a) => b[sortType] - a[sortType])
	setData(sorted)
}

const Trading = (props) => {
	const [sort, setSort] = React.useState('');
	const [data, setData] = React.useState([]);
	useEffect(() => {
		axios.get('http://localhost:4000/tradingdata').then(response => {
			setData(response.data)
		})
	}, [])
	return (
		<div className = "content">
			<div className = "sort">
				<select className="sortBy" value = {sort} onChange={event => {setSort(event.target.value); sortData(event.target.value, setData, data)}}>
					<option value="0" >Sort By: Default</option>
					<option value="1" >Newest</option>
					<option value="2" >Oldest</option>
				</select>
			</div>
			<div>
				<div className = "cards">
					{data.map((item) => (
						<CardTrading data = {item}/>
					))}
				</div>
			</div>
		</div>
	)

	
}

const Selling = (props) => {


	const [sort, setSort] = React.useState("0");
	const [data, setData] = React.useState([]);
	useEffect(() => {
		axios.get('http://localhost:4000/sellingdata').then(response => {
			setData(response.data)
		})
	}, [])
	return (
		<div className = "content">
			<div className = "sort">
				<select className="sortBy" value = {sort} onChange={event => {setSort(event.target.value); sortData(event.target.value, setData, data)}}>
					<option value="0" >Sort By: Default </option>
					<option value="1" >Newest</option>
					<option value="2" >Oldest</option>
					<option value="3" >Price: High to Low</option>
					<option value="4" >Price: Low to High</option>
				</select>
			</div>
			<div>
				<div className = "cards">
					{data.map((item) => (
							<CardSelling data = {item}/>
					))}
				</div>
			</div>
		</div>
	)
}


const LookingFor = (props) => {
	const [sort, setSort] = React.useState('');
	const [data, setData] = React.useState([]);
	
	useEffect(() => {
		axios.get('http://localhost:4000/lookingfordata').then(response => {
			setData(response.data)
		})
	}, [])
	return (
		<div className = "content">
			<div className = "sort">
				<select className="sortBy" value = {sort} onChange={event => {setSort(event.target.value); sortData(event.target.value, setData, data) }}>
					<option value="0" >Sort By: Default</option>
					<option value="1" >Newest</option>
					<option value="2" >Oldest</option>
				</select>
			</div>
			<div>
				<div className = "cards">
					{data.map((item) => (
						<CardLookingFor data = {item}/>
					))}
				</div>
			</div>
		</div>
	)
}

const CardLookingFor = (props) => {
	return (
		<div className = "card">
			<div className = "image">
				<img alt = "photocard1" src={props.data.picture}/>
			</div>
			<div className = "text">
				<p class = "username">Username: {props.data.username}</p>
				<address class = "loc">Location: {props.data.loc}</address>
				<p class = "offer">Offer: {props.data.offer}</p>
				<p class = "shipTo">Ship To: {props.data.shipTo}</p>
				<p class = "date">Date: {new Date(props.data.date).toDateString()}</p>
			</div>
		</div>
	)
}

const CardTrading = (props) => {
	return (
		<div className = "card">
			<div className = "image">
				<img alt = "photocard1" src={props.data.picture}/>
			</div>
			<div className = "text">
				<p class = "username">Username: {props.data.username}</p>
				<address class = "loc">Location: {props.data.loc}</address>
				<p class = "want">Want: {props.data.want}</p>
				<p class = "shipTo">Ship To: {props.data.shipTo}</p>
				<p class = "date">Date: {new Date(props.data.date).toDateString()}</p>
			</div>
		</div>
	)
}

const CardSelling= (props) => {
	return (
		<div className = "card">
			<div className = "image">
				<img alt = "photocard1" src={props.data.picture}/>
			</div>
			<div className = "text">
				<p class = "username">Username: {props.data.username}</p>
				<address class = "loc">Location: {props.data.loc}</address>
				<p class = "price">Price: {props.data.price}</p>
				<p class = "shipping">Shipping: {props.data.shipping}</p>
				<p class = "shipTo">Ship To: {props.data.shipTo}</p>
				<p class = "date">Date: {new Date(props.data.date).toDateString()}</p>
			</div>
		</div>
	)
}
export default Photocards