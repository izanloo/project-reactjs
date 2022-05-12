import React from 'react'
import { Link } from 'react-router-dom'


export default function Card(props) {
    const {products} = props
  return (


<div >
              <div >
                <div>
                  {/* <img src={product.} className={'w-100 imgCard'} value={product.alpha3Code} onClick={handleClick} /></Link> */}
                  </div>
                <div className='textCard'>
                  <h4>{products.name}</h4>
                  <p>brand:{products.brand}</p>
                  <p>price:{products.price}</p>
                </div>
              </div>
            </div>
  )
}
