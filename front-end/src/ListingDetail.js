import React from 'react'
import './ListingDetail.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { Link,useLocation} from 'react-router-dom'


const ListingDetail = (props) => {
    const location = useLocation()
    const data = location.state.data
    const listingType = location.state.listingType
    const photocardName = location.state.photocardName

    const changeDetails = () =>{
        if(listingType == "Sale"){
          return [
            <p>For {listingType}</p>,
            <p>Price: {data.price}</p>,
            <p>Shipping: {data.shipping}</p>
          ]
        }
        else if(listingType == "Trade"){
          return [
            <p>For {listingType}</p>,
            <p>Want: {data.want}</p>
          ]
        }
        else if(listingType == "Looking"){
          return [
            <p>{listingType} For: {photocardName}</p>,
            <p>Offer: {data.offer}</p>
          ]
        }
    }

    return (
        <div>
            <div className="top">
                <div className="firstColumnListing">
                    <AliceCarousel disableButtonsControls>
                        <div>
                            <img src={data.picture} alt="first image" className="sliderimg"/>
                        </div>
                        <div >
                            <img src={data.picture} alt="second image" className="sliderimg"/>
                        </div>
                    </AliceCarousel>
                </div>
                <div className="secondColumnListing">
                    <h3 className="photocardTitle">{photocardName}</h3>
                    <hr className="line"></hr>
                    <div className="details">
                        <h5>Details</h5>
                        {changeDetails()}
                        <p>Location: {data.location}</p>
                        <p>Ship To: {data.ship_to}</p>
                        <p>Posted: {data.date}</p>
                    </div>
                    <hr className="line"></hr>
                </div>
            </div>
            <div className="description">
                <p>Description</p>
            </div>
            <hr className="line"></hr>
            <div className="profileLink">
                <div>
                    <img src={"https://picsum.photos/65"} alt="profile image" className="profileImage"/>
                </div>
                <div className="username">
                    <h6>{data.username}</h6>
                </div>
            </div>

        </div>
        
    )
}

export default ListingDetail