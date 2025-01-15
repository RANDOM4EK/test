import React from 'react'
import UserCard from './UserCard'

export default function UserList(props) {
  return (
    <>
        <li>
            {props.name}   
        </li>
        <li>
            {props.age}   
        </li>
        <li>
            {props.hobby}   
        </li>
    </>
  )
}
