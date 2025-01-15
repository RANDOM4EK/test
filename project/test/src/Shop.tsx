import React from 'react'
import Categories from './Categories';

export default function Sgop() {
    const shopData = [
        {
          categoryName: "Электроника",
          items: [
            {
              id: 1,
              name: "Ноутбук",
              price: 65000,
              specs: {
                cpu: "Intel i5",
                ram: "8GB",
                storage: "512GB"
              },
              inStock: true
            },
            {
              id: 2,
              name: "Смартфон",
              price: 25000,
              specs: {
                screen: "6.1 inch",
                camera: "48MP",
                battery: "4000mAh"
              },
              inStock: false
            }
          ]
        },
        {
          categoryName: "Книги",
          items: [
            {
              id: 3,
              name: "React для начинающих",
              price: 1200,
              specs: {
                author: "Джон Смит",
                pages: 350,
                format: "Мягкий переплет"
              },
              inStock: true
            }
          ]
        }
      ];
      
  return (
    <>
      <ul>
        {
            shopData.map(item => {
                return <Categories key={item.items} items={item.items} categoryName={item.categoryName}/>
            })
        }
      </ul>
    </>
    
  )
}
