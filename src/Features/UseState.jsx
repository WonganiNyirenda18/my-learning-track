export default function UseState() {

    let count = 0;

    function increaseCount() {
        count += 1;

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