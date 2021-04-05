import React from 'react'
import { Link } from 'react-router-dom'
import './SellingPreview.css'

const SellingPreview = (props) => {

  const imgSrc = `https://picsum.photos/200?id=${props.details.id}`

  return (
    <article className="SellingPreview">
      <Link to={`/photocarddata/${props.details.id}`}>
        <img alt={props.details.title} src={imgSrc} />
      </Link>
    </article>
  )
}

export default SellingPreview
