import React from 'react'
import UserList from './UserList';

export default function UserCard() {
    const users = [
        { name: "Антон", age: 25, hobby: "Программирование" },
        { name: "Мария", age: 23, hobby: "Рисование" }
      ];
      
  return (
    <div>
      <ul>
        {users.map(item => {
            return <UserList key={item.name} name={item.name} age={item.age} hobby={item.hobby}/>
        })}
        
      </ul>
    </div>
  )
}
