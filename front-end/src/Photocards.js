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
	price: 56,
	shipping: "?????",
	shipTo: "NYC",
	date: 42354
}

const dataSelling1 = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	price: 66666,
	shipping: "?????",
	shipTo: "NYC",
	date: 43
}
const dataSelling2 = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	price: 333,
	shipping: "?????",
	shipTo: "NYC",
	date: 466
}
const dataSelling3 = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	price: 8,
	shipping: "?????",
	shipTo: "NYC",
	date: 3
}

const dataTrading = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	want: "?????",
	shipTo: "NYC",
	date: "4124"
}
const dataTrading2 = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	want: "?????",
	shipTo: "NYC",
	date: "35"
}

const dataTrading3 = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	want: "?????",
	shipTo: "NYC",
	date: "32"
}
const dataLookingFor = {
	picture: "https://stylecaster.com/wp-content/uploads/2019/12/black-pink.jpg",
	username: "???",
	loc: "NY",
	offer: "?????",
	shipTo: "NYC",
	date: "3"
}

let dataS = [dataSelling, dataSelling1, dataSelling2,dataSelling3]
let dataT = [dataTrading, dataTrading2, dataTrading3]
let dataL = [dataLookingFor, dataLookingFor, dataLookingFor]



const SortTrading = () => {
	const [sort, setSort] = React.useState('');

  	const changeSort = (sort) => {
    	setSort(sort);
 	}

	return (
		
		<div className = "sort">
			<select className="sortBy" value = {sort} onChange={event => changeSort(event.target.value)}>
            	<option value="0" >Sort By:</option>
            	<option value="1" >Oldest</option>
				<option value="2" >Newest</option>
        	</select>
		</div>
	)
}

const Selling = (props) => {
	const [sort, setSort] = React.useState('');
	const [data, setData] = React.useState(dataS);

	const sortAccording = {
		1: "date",
		2: "date",
		3: "price",
		4: "price"
	}
	const sortDataL = type => {
		const sortType =sortAccording[type];
		console.log(type)
		const sorted = (type == 1 || type == 3 ) ? [...dataS].sort((a, b) => b[sortType] - a[sortType]) : [...dataS].sort((b, a) => b[sortType] - a[sortType])
		setData(sorted);
	}

	return (
		<div className = "content">
			<div className = "sort">
				<select className="sortBy" value = {sort} onChange={event => {setSort(event.target.value); sortDataL(event.target.value) }}>
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


const SortLookingFor = () => {
	const [sort, setSort] = React.useState('');

  	const changeSort = (sort) => {
    	setSort(sort);
 	}

	return (
		<div className = "sort">
			<select className="sortBy" value = {sort} onChange={event => changeSort(event.target.value)}>
            	<option value="0" >Sort By:</option>
            	<option value="1" >Newest</option>
				<option value="2" >Oldest</option>
        	</select>
		</div>
	)
}

	
	
const Trading = (props) => {
	return (
		<div className = "content">
			<SortTrading/>
			<div className = "cards">
				{dataT.map((item) => (
          			<CardTrading data = {item}/>
        		))}
			</div>
		</div>
	)
}

const LookingFor = (props) => {
	return (
		<div className = "content">
			<SortLookingFor/>
			<div className = "cards">
				{dataL.map((item) => (
          			<CardLookingFor data = {item}/>
        		))}
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