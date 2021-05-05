import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from "react-bootstrap"
import './AddWishlist.css'
import axios from 'axios'

function AddWishlist(props) {
    // test for command url 
  let apiURL = "http://localhost:4000"; 
  if (process.env.REACT_APP_api_base) {
      apiURL = process.env.REACT_APP_api_base;
  }

    const [added, setAdded] = useState(false)
    const [addBtn, setAddBtn] = useState({title: "Add to Wishlist", style: "#8093f1"})
    const [clicked, setClicked] = useState(false)

    const photocard = [{
        id: props.id,
        photocard_name: props.name,
        group: props.grp,
        member: props.member,
        album: props.album,
        picture: props.image[0],
        picture2: props.image[1]
    }]

    const changeBtn = () => {
        
        if (added === true){
            setAddBtn({title: "Added to Wishlist", style: "#F7AEF8"})
            
        }
        else if (added === false){
            setAddBtn({title: "Add to Wishlist", style: "#8093f1"})
            
        }
        
        updateWishlist()
        
    }

    const updateWishlist = async () => {
        
        if (added === true && clicked === true){
            // adds photocard to wishlist
            await axios.post(`${apiURL}/addtowishlist/`+localStorage.getItem("userId"), photocard)

            .then((response) => {
            console.log(response)
            }, (error) => {
            console.log(error)
            })

        }
        
    }

    const addedToWishlist = () => {
        setClicked(true)
        setAdded(true)
    }

    useEffect(() => {

        axios.get(`${apiURL}/checkwishlist/`+props.id+'/'+localStorage.getItem("userId")).then(response => {
            
			setAdded(response.data)
          
		}, (error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        changeBtn()
    }, [added])


    return (
        <div>
            <Button className = "wishlistBtn" onClick={addedToWishlist} style={{ alignSelf: 'center', backgroundColor: '#F4F4ED', color: addBtn.style }}>
                {addBtn.title}
            </Button>
        </div>
    )
}

export default AddWishlist