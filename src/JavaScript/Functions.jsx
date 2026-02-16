export default function Functions() {

    /*const text = function () {
        console.log("My name is Wongani Nyirenda");
    }

    text();*/

    const power = function (base, exponent) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }

        return result;
    };

    console.log(power(2, 10));

    return (
        <>
            <h1>Learning functions</h1>

        </>
    )
}