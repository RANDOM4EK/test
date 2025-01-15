import React from 'react'

export default function ProductDetails(props) {
    console.log(props)
  return (
    <li>
        {props.value}
    </li>
  )
}
