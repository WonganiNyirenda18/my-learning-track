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

    //Synchronous callback

    function handleClick() {
        console.log("Button clicked");
    }

    return (
        <div>
            <h1>Callback</h1>

            <p>callback with button</p>

            <button onClick={handleClick}>Click me</button>

        </div>
    );
}