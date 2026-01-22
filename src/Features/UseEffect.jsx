import { useState, useEffect } from "react";

export default function UseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count is now", count)
    }, [count]);

    return (
        <>
            <h1>UseEffect</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </>
    );
}