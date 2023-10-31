export async function getRandomNumber(maxValue) {
    try {
        const response = await fetch(`https://www.random.org/integers/?num=1&min=1&max=${maxValue}&col=1&base=10&format=plain&rnd=new`);
        const randomWinner = await response.text();
        const parsedNumber = parseInt(randomWinner);
        if (!isNaN(parsedNumber)) {
            return parsedNumber;
        } else {
            throw new Error("Invalid response: Not a valid integer");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
