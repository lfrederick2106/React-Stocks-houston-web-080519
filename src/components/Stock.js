import React from 'react'

const Stock = (props) => (
  
  <div onClick={() => props.onClick(props.stock)}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            props.stock.price
          }</p>
      </div>
    </div>
    {/* <p>{console.log(props)}</p> */}
  </div>
);


export default Stock
