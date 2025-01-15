import React from 'react'
import CategoryList from './CategoryList'

export default function Categories(props) {
  return (
    <>
        <li>
            {props.categoryName}
            <ul>
                {
                    props.items.map(item => {
                        return <CategoryList key={item.id} name={item.name} specs={item.specs}/>
                    })
                    
                }
            </ul>
        </li>
    </>
  )
}
