import React from 'react'
import './Price.css'


function PriceValue({value, onChange, price}) {
const valueInput = (event) => {
    onChange(event.target.value)
}


    return(
    <div>
       <span>{price}</span>
        <input type="number" name="quantity" min="0" value={value} onChange={valueInput}></input>
    </div>
    )
}

export default PriceValue