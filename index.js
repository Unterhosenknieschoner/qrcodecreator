//Made by DJ Tingombrax


// Command line input shizz
const readline = require('readline');

function getInput(prompt) {
    const rl = readline. createInterface({
        input: process.stdin,
        output: process. stdout

    });

    return new Promise((resolve, reject) => {
        rl.question (prompt, (input) => {
            rl.close();
            resolve(input);

        });

// user input:
        async function main() {
            try {
                const name = await getInput("Enter a link.");
                console. log('Link copied!, ${name}!');
            } catch (error) {
                console.error("An error occurred:", error)

//Create QRcode

