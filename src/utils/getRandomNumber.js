export async function getRandomNumber(maxValue) {
    try {
        const response = await fetch(`https://www.random.org/integers/?num=1&min=1&max=${maxValue}&col=1&base=10&format=plain&rnd=new`);
        const randomWinner = await response.text();
        return randomWinner;
    } catch (error) {
        console.error("Error:", error);
    }
}
