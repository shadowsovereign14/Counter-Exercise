import React, {useState, useEffect} from 'react'
import Counter from "./Counter";

const CounterGroup = (props) => {
    const [counter, setCounter] = useState([])
    const {sizeNumber, addHandler} = props;
    const sizeGroup = Array(sizeNumber).fill(0);
    
    const counterChange = (count, current, index) => {
        let newCounter = [...counter] 
        newCounter[index] = current + count
        setCounter(newCounter)
        addHandler(count)
    }

    useEffect(() => {
        if(counter.length > sizeNumber) {
            addHandler(counter[sizeNumber] * -1)
            counter.splice(sizeNumber, counter.length - sizeNumber)
        }
    }, [addHandler, counter, sizeNumber])

    return sizeGroup.map((item, index) => {
        return <Counter counterChange={counterChange} key={index} index={index} />
    })
}

export default CounterGroup;