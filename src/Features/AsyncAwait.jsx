export default function AsyncAwait() {

    function alarm(name, delay) {
        return new Promise((resolve, reject) => {
            if (delay < 0) {
                reject("Invalid delay")
            }

            setTimeout(() => {
                resolve(`Wake up ${name}`)
            }, delay);
        });
    }

    async function setAlarm(name, delay) {
        try {
            const message = await alarm(name, delay);
            console.log(message);
        } catch (error) {
            console.log("could not set alarm", error);
        }
    }

    setAlarm("John", -2000);

    return (
        <>
            <h1>Async/Await</h1>
        </>
    );
}