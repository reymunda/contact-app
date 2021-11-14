const {saveContact} = require('./filesystem');
const yargs = require('yargs');


yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'Full name',
            demandOption: true,
            type: 'string'
        },
        phone: {
            describe: 'Phone number',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        }        
    },
    handler(argv){
        saveContact(argv.name,argv.phone,argv.email);
        // console.log(argv.name)
    }
})

yargs.parse()

// const main = async () => {
//     const name = await makeQuestion("Enter your name          : "),
//           phone = await makeQuestion("Enter your mobile phone  : "),
//           email = await makeQuestion("Enter your email         : ");

//           saveContact(name,phone,email);
// }

// main();