import React from 'react'
import { Link } from 'react-router-dom'

const CustumerButton = (props) => {
  return (
    <Link to={props.link}>
      <button className={props.style.class}>{props.text}</button>
    </Link>
  )
}

export default CustumerButton