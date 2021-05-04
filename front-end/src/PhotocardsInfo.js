
import React, {useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg'
import './PhotocardsInfo.css'
import { Link } from 'react-router-dom'


// test for command url 

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
  				activePage===1 && <Trading photocardName={props.name} id={props.id}/>
			}

			{
  				activePage===0 && <Selling photocardName={props.name} id={props.id}/>
			}

			{
  				activePage===2 && <LookingFor photocardName={props.name} id={props.id}/>
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
	const sorted = (type === 1 || type === 3 ) ? [...data].sort((a, b) => b[sortType] - a[sortType]) : [...data].sort((b, a) => b[sortType] - a[sortType])
	setData(sorted)
}

const Trading = (props) => {
	let apiURL = "http://localhost:4000";
	if (process.env.REACT_APP_api_base) {
		apiURL = process.env.REACT_APP_api_base;
	}
	const [sort, setSort] = React.useState('');
	const [data, setData] = React.useState([]);
	useEffect(() => {
		axios.get(`${apiURL}/tradingdata/`+props.id).then(response => {
			setData(response.data)
		})
	})
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
						<CardTrading data = {item} photocardName={props.photocardName}/>
					))}
				</div>
			</div>
		</div>
	)

	
}

const Selling = (props) => {
	let apiURL = "http://localhost:4000";
	if (process.env.REACT_APP_api_base) {
		apiURL = process.env.REACT_APP_api_base;
	}	
	const [sort, setSort] = React.useState("0");
	const [data, setData] = React.useState([]);
	useEffect(() => {
		axios.get(`${apiURL}/sellingdata/`+props.id).then(response => {
			setData(response.data)
		})
	})
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
							<CardSelling data = {item} photocardName={props.photocardName}/>
					))}
				</div>
			</div>
		</div>
	)
}


const LookingFor = (props) => {
	let apiURL = "http://localhost:4000";
	if (process.env.REACT_APP_api_base) {
		apiURL = process.env.REACT_APP_api_base;
	}
	const [sort, setSort] = React.useState('');
	const [data, setData] = React.useState([]);
	
	useEffect(() => {
		axios.get(`${apiURL}/lookingfordata/`+props.id).then(response => {
			setData(response.data)
		})
	})
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
						<CardLookingFor data = {item} photocardName={props.photocardName}/>
					))}
				</div>
			</div>
		</div>
	)
}

const CardLookingFor = (props) => {
	return (
		<Link to={{
            pathname: `/photocard/listing/${props.data._id}`,
            state: {data: props.data, listingType: "Looking", photocardName: props.photocardName}
        }}>
			<div className = "card">
				<div className = "image">
					<img alt = "photocard" src={props.data.image}/>
				</div>
				<div className = "text">
					<p class = "username">Username: {props.data.username}</p>
					<address class = "loc">Location: {props.data.location}</address>
					<p class = "offer">Offer: {props.data.listedFor.looking.offer}</p>
					<p class = "shipTo">Ship To: {props.data.shipTo}</p>
					<p class = "date">Date: {new Date(props.data.posted).toDateString()}</p>
				</div>
			</div>
		</Link>
	)
}

const CardTrading = (props) => {
	return (
		<Link to={{
            pathname: `/photocard/listing/${props.data._id}`,
            state: {data: props.data, listingType: "Trade", photocardName: props.photocardName}
        }}>
			<div className = "card">
				<div className = "image">
					<img alt = "photocard1" src={props.data.image}/>
				</div>
				<div className = "text">
					<p class = "username">Username: {props.data.username}</p>
					<address class = "loc">Location: {props.data.location}</address>
					<p class = "want">Want: {props.data.listedFor.trading.want}</p>
					<p class = "shipTo">Ship To: {props.data.shipTo}</p>
					<p class = "date">Date: {new Date(props.data.posted).toDateString()}</p>
				</div>
			</div>
		</Link>
	)
}

const CardSelling= (props) => {
	return (
		<Link to={{
            pathname: `/photocard/listing/${props.data._id}`,
            state: {data: props.data, listingType: "Sale", photocardName: props.photocardName}
        }}>
			<div className = "card">
				<div className = "image">
					<img alt = "photocard1" src={props.data.image}/>
				</div>
				<div className = "text">
					<p class = "username">Username: {props.data.username}</p>
					<address class = "loc">Location: {props.data.location}</address>
					<p class = "price">Price: {props.data.listedFor.selling.price}</p>
					<p class = "shipping">Shipping: {props.data.listedFor.selling.shipping}</p>
					<p class = "shipTo">Ship To: {props.data.shipTo}</p>
					<p class = "date">Date: {new Date(props.data.posted).toDateString()}</p>
				</div>
			</div>
		</Link>
	)
}
export default Photocards