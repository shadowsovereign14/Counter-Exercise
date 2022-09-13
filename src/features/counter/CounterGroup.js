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
            let number = 0;
            const removedCounts = Array(counter.length).fill(0);
            removedCounts.forEach((count, index) => {
                if(index > sizeNumber - 1 && counter[index]) {
                    number -= (counter[index])
                }
            })
            addHandler(number)
            counter.splice(sizeNumber, counter.length - sizeNumber)
        }
    }, [addHandler, counter, sizeNumber])

    return sizeGroup.map((item, index) => {
        return <Counter counterChange={counterChange} key={index} index={index} />
    })
}

export default CounterGroup;