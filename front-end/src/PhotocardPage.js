import React from 'react'
import Photocard from './Photocard'
import PhotocardInfo from './PhotocardsInfo'

import {useLocation} from 'react-router-dom';


function PhotocardPage(props){
    const location = useLocation()
    const data = location.state
    const image = [data.picture, data.picture2]
    return (
        <div>
            <Photocard image={image} name={data.photocard_name} grp={data.group} member={data.member} album={data.album}/>
            //<AddListingModal name={data.photocard_name} grp={data.group} member={data.member} album={data.album}/>
            <PhotocardInfo name={data.photocard_name}/>
        </div>
    )
}

export default PhotocardPage