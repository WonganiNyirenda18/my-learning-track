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

    console.log("start")

    setTimeout(() => {
        console.log("2 seconds passed")
    }, 2000)

    console.log("end")

    return (
        <div>
            <h1>Callback</h1>

        </div>
    );
}