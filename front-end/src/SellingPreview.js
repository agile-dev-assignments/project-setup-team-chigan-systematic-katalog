import React from 'react'
import { Link } from 'react-router-dom'
import './SellingPreview.css'

const SellingPreview = (props) => {

  const imgSrc = `https://picsum.photos/200?id=${props.details.id}`

  return (
    <article className="SellingPreview">
      <Link to={`/photocard/${props.details.id}`}>
        <img alt={props.details.title} src={imgSrc} />
        <h2>{props.details.title}</h2>
      </Link>
    </article>
  )
}

export default SellingPreview
