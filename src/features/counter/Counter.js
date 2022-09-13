import React, {useState} from 'react'

const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const {counterChange} = props

    const increase = () => {
        setNumber(number + 1)
        counterChange(1)
    }
 
    const decrease = () => {
        setNumber(number - 1)
        counterChange(-1)
    }

    return(
        <div>
            <button onClick={decrease}>-</button>
            <span>{number}</span>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter;