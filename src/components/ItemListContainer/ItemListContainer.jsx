import React from 'react'
import "./itemListContainer.css"

const ItemListContainer = ({ heroText , heroText2 }) => {
  return (
    <div className="itemListContainer">
        <h1>{heroText}</h1>
        <p>{heroText2}</p>
    </div>
  )
}

export default ItemListContainer