import React from 'react'
import { Link } from 'react-router-dom'
import './SellingPreview.css'
import SellingPost from './SellingPost'

const SellingPreview = (props) => {

  const imgSrc = `https://picsum.photos/200?id=${props.details.id}`

  return (
    <article className="SellingPreview">
      {/*<Link to={{
            pathname: `/sellingpost/${props.details.id}`,
            state: props.details
          }}>*/}
        <Link to="/sellingpost">
        <img alt={props.details.name} src={props.details.pic1} />
        <h3>{props.details.name}</h3>
        </Link>

      {/*</Link>*/}
    </article>
  )
}

export default SellingPreview
