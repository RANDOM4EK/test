import React from 'react'
import ProductDetails from './ProductDetails'

export default function Product(props) {
  return (
    <>
        {
            Object.entries(props.space).map(([item,value]) => {
                return <ProductDetails key={item} value={value}/>
            })
        }
    </>
  )
}
