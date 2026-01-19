import { useEffect } from "react";

export default function PromiseExample() {

    useEffect(() => {
        let promise = new Promise((resolve, reject) => {
            let number = 4;

            if (number % 2 === 0) {
                resolve("Number is even");
            } else {
                reject("Number is odd");
            }
        });

        promise
            .then((message) => {
                console.log(message);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []); // runs once when component loads

    return (
        <div>
            <h1>Promise</h1>
            <p>Check the console for output</p>
        </div>
    );
}
