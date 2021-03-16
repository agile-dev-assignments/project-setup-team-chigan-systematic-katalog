import React from 'react'
import Photocard from './Photocard'


const image = ["images/image1.jpg", "images/image2.jpg"]

function PhotocardPage(){
    return (
        <div>
            <Photocard image={image} name="Bang Chan Double Sided #2 Photocard" grp="Stray Kids" member="Bang Chan" album="GO生(GO LIVE)"/>
        </div>
    )
}

export default PhotocardPage