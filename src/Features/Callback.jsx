export default function Callback() {


    /* {/*basic understanding of callbacks
    function greet(name, callback) {
        console.log("Hello, " + name);
        callback();
    }

    function sayHie() {
        console.log("Goodbye");
    }

    greet("John", sayHie);*/

    /*callbakcs in javascript

    console.log("start")

    setTimeout(() => {
        console.log("2 seconds passed")
    }, 2000)

    console.log("end")*/

    //asynchronous callback

    function fetchData(callback) {
        setTimeout(() => {
            callback("Data loaded!")
        }, 2000)
    }

    function handleClick() {
        fetchData((message) => {
            alert(message);
        })
    }



    return (
        <div>
            <h1>Callback</h1>

            <p>async callback</p>
            <button onClick={handleClick}>Load Data</button>

        </div>
    );
}