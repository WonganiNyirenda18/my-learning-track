export default function Promise() {
    {/*basic understanding of promises*/ }

    let promise = new Promise((resolve, reject) => {
        let number = 4;
        if (number % 2 == 0) {
            resolve("Number is even")
        } else {
            reject("Number is odd")
        }
    });

    checkEven
        .then((message) => {
            console.log(message)
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <>
            <h1>Promise</h1>
        </>
    );
}