import React from 'react'
import { Link } from 'react-router-dom'
import './NewlyAddedPreview.css'

const NewlyAddedPreview = (props) => {

  // const imgSrc = `https://picsum.photos/100?id=${props.details.id}` 

  return (
    <article className="NewlyAddedPreview">
      
      <Link to={{
            pathname: `/photocard/${props.details.id}`,
            state: props.details
          }}>
        <img alt={props.details.photocard_name} src={props.details.picture2} />
        <h3>{props.details.photocard_name}</h3>
      </Link>
    </article>
  )
}

export default NewlyAddedPreview
