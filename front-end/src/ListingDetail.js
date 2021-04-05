import React from 'react'
import './ListingDetail.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

const ListingDetail = () => {
    
    return (
        <div>
            <div className="firstColumn">
                    <AliceCarousel disableButtonsControls>
                        <div>
                            <img src={"https://picsum.photos/200/325?id=1"} alt="first image" className="sliderimg"/>
                        </div>
                        <div >
                            <img src={"https://picsum.photos/200/325?id=2"} alt="second image" className="sliderimg"/>
                        </div>
                    </AliceCarousel>
                </div>
        </div>
        
    )
}

export default ListingDetail