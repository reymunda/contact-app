const {saveContact,listContact,removeContact} = require('./filesystem');
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
}).demandCommand();

yargs.command({
    command: 'list',
    handler(){  
        listContact();
    }
})

yargs.command({
    command: 'remove',
    builder: {
        phone: {
            describe: 'Phone number',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        removeContact(argv.phone);
    }
})

yargs.parse();