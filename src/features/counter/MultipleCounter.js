import {useState} from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

const MultipleCounter = () => {
    const [size, setSize] = useState(0)
    const handleSizeChange = (size) => {
        console.log("Multiple Counter size: ", size);
        setSize(size);
    }
    return (
        <>
            <CounterSizeGenerator changeSize={handleSizeChange}/>
            <CounterGroup sizeNumber={size}/>
        </>
    )
}

export default MultipleCounter;