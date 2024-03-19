// Created by DJ Tingombrax
const qrcode = require('qrcode');


//All the jazzy input shizz
const readline = require('readline');

function getInput(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

    });

    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            rl.close();
            resolve(input);
        });
    });
}

// User input:
        async function main() {
            try {
                const link = await getInput("Enter a link. ");
                console.log(`Processing..., ${link}!`);


                qrcode.toFile('qrcode.svg', link, {
                    errorCorrectionLevel: 'L',
                    margin: 4,
                    scale: 10,
                }, (err) => {
                    if (err) throw err;
                    console.log('QR-Code generated successfully!');
                });

//Possibly console output

                qrcode.toString(`${link}`,{type:'terminal'}, function (err, url) {
                    console.log(url)
                })

            } catch (error) {
                console.error("An error occurred:", error);
            }
        }





                main();