const readline = require('readline')
const bs58 = require('bs58');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('What do you want to convert to bs68? -paste here:  ', input =>{
    const array = Uint8Array.from(input)
    const encoded = bs58.encode(array)
    console.log('')
    console.log('-----')
    console.log('')
    console.log(`bs58 encoded: ${encoded}`)
})