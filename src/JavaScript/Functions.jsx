export default function Functions() {

    /*const text = function () {
        console.log("My name is Wongani Nyirenda");
    }

    text();*/

    /* const power = function (base, exponent) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }

        return result;
    };

    console.log(power(2, 10)); */

    //Binding and Scopes

    let x = 10;

    if (true) {
        let y = 20;
        var z = 30;
        console.log(x + y + z);
    }

    console.log(x + z);



    return (
        <>
            <h1>Learning functions</h1>

        </>
    )
}