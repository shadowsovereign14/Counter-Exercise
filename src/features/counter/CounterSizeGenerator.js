import {useState} from "react"
const   CounterSizeGenerator = () => {
    const [size, setSize] = useState(0)

    const changeValue = (event) => {
        setSize(event.target.value)
    }
    return(
        <div>
            <span>Size: </span>
            <input type="number" min={0} value={size} onChange={changeValue}/>
        </div>
    )
}

export default CounterSizeGenerator;