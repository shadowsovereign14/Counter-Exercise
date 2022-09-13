import Counter from "./Counter";

const CounterGroup = (props) => {
    const {sizeNumber, addHandler} = props;
    const sizeGroup = Array(sizeNumber).fill(0);
    
    const counterChange = (count) => {
        addHandler(count)
    }

    return sizeGroup.map((item, index) => {
        return <Counter counterChange={counterChange} key={index} />
    })
}

export default CounterGroup;