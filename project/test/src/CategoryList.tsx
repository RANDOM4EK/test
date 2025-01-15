import React from 'react'
import Product from './Product'


export default function CategoryList(props) {
    console.log(111, props)

  return (
    <>
        <li>
            {
                props.name
            }
            <ul>
                {
                   <Product space={props.specs}/>
                }
            </ul>
        </li>
    </>
  )
}
