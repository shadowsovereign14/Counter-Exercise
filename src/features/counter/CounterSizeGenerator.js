import {useState} from "react"
const   CounterSizeGenerator = (props) => {
    const [size, setSize] = useState(0)
    const {changeSize} = props;

    const changeValue = (event) => {
        const inputValue = event.target.value;
        setSize(inputValue);
        changeSize(inputValue);
    }
    return(
        <div>
            <span>Size: </span>
            <input type="number" min={0} value={size} onChange={changeValue}/>
        </div>
    )
}

export default CounterSizeGenerator;