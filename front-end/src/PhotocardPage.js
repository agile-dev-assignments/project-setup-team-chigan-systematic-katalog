import React, {useState} from 'react'
import Photocard from './Photocard'
import PhotocardInfo from './PhotocardsInfo'
import {useLocation} from 'react-router-dom';
import AddListingModal from './AddListingModal'
import AddWishlist from './AddWishlist'
import './PhotocardPage.css'

function PhotocardPage(props){
    const location = useLocation()
    const data = location.state
    const image = [data.picture, data.picture2]
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token") !== null)


    return (
        <div className="photocardPage">
            <Photocard image={image} name={data.photocard_name} grp={data.group} member={data.member} album={data.album}/>
            <div className="center">
                {loggedIn && <AddListingModal name={data.photocard_name} id={data.id} grp={data.group} member={data.member} album={data.album}/>}
                {loggedIn && <AddWishlist name={data.photocard_name} id={data.id} image={image} grp={data.group} member={data.member} album={data.album}/>}
            </div>
            <PhotocardInfo name={data.photocard_name} id={data.id}/>
        </div>
    )
}

export default PhotocardPage