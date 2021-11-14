const fs = require('fs');
const chalk = require('chalk');

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data');
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]','utf-8');
}
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const makeQuestion = (question) => {
//     return new Promise(resolve => {
//         rl.question(question, (answer) => {
//            resolve(answer); 
//         })
//     })
// }

const saveContact = (name,phone,email) => {
    let contact = {name,phone,email};

    let file = fs.readFileSync('./data/contacts.json','utf-8');
    if(file == ""){
        fs.writeFileSync("./data/contacts.json", "[]");
    }
    let contacts = JSON.parse(file);
    let duplicate = contacts.find(e => e.phone === phone);
    
    if(duplicate !== undefined){
        console.log(chalk.bgRed.white("Contact has been saved in the list!"));
    }else{
        contacts.push(contact);
        fs.writeFile('./data/contacts.json', JSON.stringify(contacts,null,2), (err) => {
            if(err) throw err;
        })
    
        console.log(chalk.bgHex("#019421").white('Contact berhasil ditambahkan!'));
    }


}

module.exports = {saveContact};