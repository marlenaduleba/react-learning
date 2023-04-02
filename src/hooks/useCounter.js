import { useState } from "react";

const useCounter = startValue => {
    const [counter, setCounter] = useState(startValue);

    return {
        counter: counter,
        increase: () => setCounter(prevCount => prevCount + 1),
        decrease: () => setCounter(prevCount => prevCount -1),
        clear: () => setCounter(startValue)
    }
}

export default useCounter;