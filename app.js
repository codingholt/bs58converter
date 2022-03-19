#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const bs58 = require('bs58');


program
  .name('bs58')
  .description('CLI to encode or decode base 58')
  .version('0.0.1');

program
    .command('encode')
    .description('Encode a array to base 58 string')
    .argument('input', 'array to encode')
    .action((input) => {
        const array = Uint8Array.from(input)
        const encoded = bs58.encode(array)
        console.log('')
        console.log('-----')
        console.log('')
        console.log(`bs58 encoded: ${encoded}`)
      });

program
      .command('decode')
      .description('Decode a string to bytes')
      .argument('<input>', 'base 58 string to decode')
      .action((input) => {
            const decoded = bs58.decode(input)
            console.log('')
            console.log('-----')
            console.log('')
            console.log(`bs58 decoded: ${decoded}`)
        });
  
program.parse()

// rl.question('Encode or Decode?', input =>{
//     if(input == 'encode'){
//         console.log('')
//         rl2.question('Input here please: '), input =>{
//             const array = Uint8Array.from(input)
//             const encoded = bs58.encode(array)
//             console.log('')
//             console.log('-----')
//             console.log('')
//             console.log(`bs58 encoded: ${encoded}`)
//         }
        
//     }else if (input == 'decode'){
//         console.log('')
//         rl2.question('Input here please:  ', input =>{
//             const decoded = bs58.encode(input)
//             console.log('')
//             console.log('-----')
//             console.log('')
//             console.log(`bs58 decoded: ${decoded}`)
//         })
       
//     }
// })