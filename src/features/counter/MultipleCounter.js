import {useState} from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter = () => {
    const [size, setSize] = useState(0)
    const [sum, setSum] = useState(0)
    const handleSizeChange = (size) => {
        console.log("Multiple Counter size: ", size);
        setSize(size);
    }

    const addHandler = (updatedSum) => {
        setSum(sum + updatedSum)
    }

    return (
        <>
            <CounterSizeGenerator changeSize={handleSizeChange}/>
            <CounterGroupSum sum={sum}/>
            <CounterGroup addHandler={addHandler} sizeNumber={size}/>
        </>
    )
}

export default MultipleCounter;