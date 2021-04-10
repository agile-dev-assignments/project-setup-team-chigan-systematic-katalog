import React from 'react'
import { Link } from 'react-router-dom'
import './WishlistPreview.css'


const WishlistPreview = (props) => {

  return (
    <article className="WishlistPreview">
      <Link to={{
            pathname: `/photocard/${props.details.id}`,
            state: props.details
          }}>
        <img alt={props.details.photocard_name} src={props.details.picture} />
        <h4>{props.details.photocard_name}</h4>

      </Link>
    </article>
  )
}

export default WishlistPreview
