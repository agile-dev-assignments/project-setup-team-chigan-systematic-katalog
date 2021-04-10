import React from 'react'
import { Link } from 'react-router-dom'
import './TrendingPreview.css'

const TrendingPreview = (props) => {

  const imgSrc = `https://picsum.photos/200?id=${props.details.id}`

  return (
    <article className="TrendingPreview">
      <Link to={{
            pathname: `/photocard/${props.details.id}`,
            state: props.details
          }}>
        <img alt={props.details.photocard_name} src={imgSrc} />
        <h3>{props.details.photocard_name}</h3>

      </Link>
    </article>
  )
}

export default TrendingPreview
