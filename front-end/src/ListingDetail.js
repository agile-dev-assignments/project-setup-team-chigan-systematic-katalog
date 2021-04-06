import React from 'react'
import './ListingDetail.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

const ListingDetail = () => {
    
    return (
        <div>
            <div className="top">
                <div className="firstColumnListing">
                    <AliceCarousel disableButtonsControls>
                        <div>
                            <img src={"https://picsum.photos/200/325?id=1"} alt="first image" className="sliderimg"/>
                        </div>
                        <div >
                            <img src={"https://picsum.photos/200/325?id=2"} alt="second image" className="sliderimg"/>
                        </div>
                    </AliceCarousel>
                </div>
                <div className="secondColumnListing">
                    <h3 className="photocardTitle">Photocard Name</h3>
                    <hr className="line"></hr>
                    <div className="details">
                        <h5>Details</h5>
                        <p>For ...</p>
                        <p>Price: </p>
                        <p>Shipping: </p>
                        <p>Location: </p>
                        <p>Ship To: </p>
                        <p>Posted: </p>
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
                    <h6>Username</h6>
                </div>
            </div>

        </div>
        
    )
}

export default ListingDetail