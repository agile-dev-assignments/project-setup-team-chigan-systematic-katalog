import React from 'react'
// import { filterProps } from 'recharts/types/util/types'
// import logo from './logo.svg'
import './Photocards.css'




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
  				activePage===1 && <Trading data = {dataTrading}/>
			}

			{
  				activePage===0 && <Selling data = {dataSelling}/>
			}

			{
  				activePage===2 && <LookingFor data = {dataLookingFor}/>
			}
			
		</div>
	)
}


// const PhotocardsMenu = () => {
	
	
// }


const dataSelling = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	price: 10000,
	shipping: "?????",
	shipTo: "NYC",
	date: "3/15"
}

const dataTrading = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	want: "?????",
	shipTo: "NYC",
	date: "3/15"
}

const dataLookingFor = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	offer: "?????",
	shipTo: "NYC",
	date: "3/15"
}


const dropDownFunction = () => {
	document.getElementsByClassName("sortmenu").classList.toggle("show");
}

const Sort = () => {
	return (
		<div className = "sort">
			<p className = "sortBy" onClick = {() => dropDownFunction()}>Sort By</p>
			<div className="sortmenu">
				<p>1</p>
				<p>2</p>
				<p>3</p>
			</div>
		</div>
	)
}

const Selling = (props) => {
	return (
		<div className = "content">
			<Sort/>
			<div className = "cards">
				<CardSelling data = {props.data}/>
				<CardSelling data = {props.data}/>
			</div>
		</div>
		
	)
}
	
	
const Trading = (props) => {
	return (
		<div className = "content">
			<Sort/>
			<div className = "cards">
				<CardTrading data = {props.data}/>
				<CardTrading data = {props.data}/>
			</div>
		</div>
	)
}

const LookingFor = (props) => {
	return (
		<div className = "content">
			<Sort/>
			<div className = "cards">
				<CardLookingFor data = {props.data}/>
				<CardLookingFor data = {props.data}/>
			</div>
		</div>
	)
}

// const Selling = (props) => {
// 	return (
// 		<div className = "content">
// 			<Sort/>
// 			<div className = "cards">
// 				<div className = "card">
// 					<div className = "image">
// 						<img alt = "photocard1" src={props.data.picture}/>
// 					</div>
// 					<p class = "username">Username: {props.data.username}</p>
// 					<address class = "loc">Location: {props.data.loc}</address>
// 					<p class = "price">Price: {props.data.price}</p>
// 					<p class = "shipping">Shipping: {props.data.shipping}</p>
// 					<p class = "shipTo">Ship To: {props.data.shipTo}</p>
// 					<p class = "date">Date: {props.data.date}</p>
// 				</div>
// 			</div>
// 		</div>
		
// 	)
// }
	
	
// const Trading = (props) => {
// 	return (
// 		<div className = "content">
// 			<Sort/>
// 			<div className = "cards">
// 				<div className = "card">
// 					<img alt = "photocard1" src={props.data.picture}/>
// 					<p class = "username">Username: {props.data.username}</p>
// 					<address class = "loc">Location: {props.data.loc}</address>
// 					<p class = "want">Want: {props.data.want}</p>
// 					<p class = "shipTo">Ship To: {props.data.shipTo}</p>
// 					<p class = "date">Date: {props.data.date}</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// const LookingFor = (props) => {
// 	return (
// 		<div className = "content">
// 			<Sort/>
// 			<div className = "cards">
// 				<div className = "card">
// 					<img alt = "photocard1" src={props.data.picture}/>
// 					<p class = "username">Username: {props.data.username}</p>
// 					<address class = "loc">Location: {props.data.loc}</address>
// 					<p class = "offer">Offer: {props.data.offer}</p>
// 					<p class = "shipTo">Ship To: {props.data.shipTo}</p>
// 					<p class = "date">Date: {props.data.date}</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

const CardLookingFor = (props) => {
	return (
		<div className = "card">
			<div className = "image">
				<img alt = "photocard1" src={props.data.picture}/>
			</div>
			<p class = "username">Username: {props.data.username}</p>
			<address class = "loc">Location: {props.data.loc}</address>
			<p class = "offer">Offer: {props.data.offer}</p>
			<p class = "shipTo">Ship To: {props.data.shipTo}</p>
			<p class = "date">Date: {props.data.date}</p>
		</div>
	)
}

const CardTrading = (props) => {
	return (
		<div className = "card">
			<div className = "image">
				<img alt = "photocard1" src={props.data.picture}/>
			</div>
			<p class = "username">Username: {props.data.username}</p>
			<address class = "loc">Location: {props.data.loc}</address>
			<p class = "want">Want: {props.data.want}</p>
			<p class = "shipTo">Ship To: {props.data.shipTo}</p>
			<p class = "date">Date: {props.data.date}</p>
		</div>
	)
}

const CardSelling= (props) => {
	return (
		<div className = "card">
			<div className = "image">
				<img alt = "photocard1" src={props.data.picture}/>
			</div>
			<p class = "username">Username: {props.data.username}</p>
			<address class = "loc">Location: {props.data.loc}</address>
			<p class = "price">Price: {props.data.price}</p>
			<p class = "shipping">Shipping: {props.data.shipping}</p>
			<p class = "shipTo">Ship To: {props.data.shipTo}</p>
			<p class = "date">Date: {props.data.date}</p>
		</div>
	)
}
export default Photocards