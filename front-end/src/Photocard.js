import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import './Photocard.css'
import "react-alice-carousel/lib/alice-carousel.css"


function Photocard(props){

    // let [month, date] = new Date().toLocaleDateString("en-US").split("/")
    // const todayDate = month + "/" + date

    const data = [{name: "3/12", price: 8, pv: 2400, amt: 2400}, {name: "3/13", price: 7, pv: 2400, amt: 2400}, {name: "3/14", price: 10, pv: 2400, amt: 2400}]
    
    const totalPrice = data.reduce((priceTotal, dataPoint) => priceTotal + dataPoint.price, 0)
    const avgPrice = Math.round(totalPrice / data.length * 100) / 100

    return (
        <div>
            <div className="photocard">
                <div className="images">
                    <AliceCarousel disableButtonsControls>
                        <div>
                            <img src={props.image[0]} alt="front photocard" className="sliderimg"/>
                            <p className="imgDesc">Front image of the photocard</p>
                        </div>
                        <div >
                            <img src={props.image[1]} alt="back photocard" className="sliderimg"/>
                            <p className="imgDesc">Back image of the photocard</p>
                        </div>
                    </AliceCarousel>
                </div>
                <div className="photocardDesc">
                    <h3>{props.name}</h3>
                    <p>{props.grp}</p>
                    <p>Member: {props.member}</p>
                    <p>Album: {props.album}</p>
                </div>
            </div>
            <div className="rect">
                <ResponsiveContainer width="95%" height="85%">
                    <LineChart width={300} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} className="graph">
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                <p className="graphDesc">Avg Price: ${avgPrice}</p>
            </div>    
        </div>
        
    )
}

export default Photocard