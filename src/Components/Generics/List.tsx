import React from 'react'

type ListProps<T>={
    items : T[],
    onClick: (value: T)=> void
}

export const List=<T extends {}>({items, onClick}: ListProps<T>)=> {
  return (
    <div>
      <h2>List of items</h2>
      {
        items.map((data, index)=>(
            <span key={index} onClick={()=>onClick(data)}>{}</span>
        ))
      }
    </div>
  )
}
