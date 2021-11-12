const fs = require('fs');
const readline = require('readline');

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data');
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]','utf-8');
}

let contacts = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf-8'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your phone number: ', (phone) => {
       let contact = {name, phone};
       contacts.push(contact);

       fs.writeFile('./data/contacts.json', JSON.stringify(contacts), (err) => {
        if(err) throw err;
       })
       console.log('Data successfully entered!');

       rl.close();
    })
})