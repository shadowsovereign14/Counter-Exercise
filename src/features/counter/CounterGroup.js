import Counter from "./Counter";

const CounterGroup = (props) => {
    const {sizeNumber} = props;
    const sizeGroup = Array(sizeNumber).fill(0);

    return sizeGroup.map((item, index) => {
        return <Counter key={index}/>
    })
}

export default CounterGroup;