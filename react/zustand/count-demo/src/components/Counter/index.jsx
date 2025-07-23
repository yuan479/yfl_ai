import { useCounterStore } from "../../store/count"

const Counter = () => {
    const {
        count,
        increment,
        decrement,
    } = useCounterStore()

    return (
        <>
            <h3> Counter {count}</h3>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </>
    )
}

export default Counter