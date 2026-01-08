import { useState } from "react";

export default function UseState() {

    // let count = 0;

    /* UseState
    place an initial values either a number or a string or an object or an array.
    useStae() was built to return an array of two elements.
    first element is the current state value.
    second element is the function that updates the state value.*/

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount((prev) => prev + 1);

        console.log(count);
    }

    return (
        <>
            <h1>UseState</h1>

            <div>
                <p>Count: {count}</p>
                <button onClick={increaseCount}>Increase Count</button>
            </div>
        </>
    );
}