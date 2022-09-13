import React, {useState} from 'react'

const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const {counterChange, index} = props

    const increase = () => {
        setNumber(number + 1)
        counterChange(1, number, index)
    }
 
    const decrease = () => {
        setNumber(number - 1)
        counterChange(-1, number, index)
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