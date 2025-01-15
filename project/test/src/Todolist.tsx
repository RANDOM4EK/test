import React from 'react'
import Todoitem from './Todoitem';



export default function Todolist() {
    const tasks = [
        { id: 1, text: "Выучить React", completed: false },
        { id: 2, text: "Сделать компонент", completed: true }
      ];
  return (
    <div>
      <ul>
        {
        tasks.map(item => {
            return <Todoitem key={item.id} text={item.text}/>
        })
        }
        
      </ul>
    </div>
  )
}
