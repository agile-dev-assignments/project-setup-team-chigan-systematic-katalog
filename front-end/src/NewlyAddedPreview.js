import React from 'react'
import { Link } from 'react-router-dom'
import './NewlyAddedPreview.css'

const NewlyAddedPreview = (props) => {

  const imgSrc = `https://picsum.photos/100?id=${props.details.id}` 

  return (
    <article className="NewlyAddedPreview">
      <Link to={`/photocard/${props.details.id}`}>
        <img alt={props.details.title} src={imgSrc} />
        <h2>{props.details.title}</h2>
      </Link>
    </article>
  )
}

export default NewlyAddedPreview
