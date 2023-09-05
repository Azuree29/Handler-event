import React from 'react'
import PriceValue from './PriceValue'
import {useState} from 'react'
import './Price.css'


function Price() {
    const [prices, setPrice] = useState(0)

    const priceAmount = (value) => {
        setPrice(value)
    }
      
   




    return(
        <div>
            <div className="flex">
        <span>Price : {prices} </span>
    
        <PriceValue value={prices} onChange = {priceAmount}></PriceValue>
       
      
       
        </div>
        </div>

    )
}

export default Price