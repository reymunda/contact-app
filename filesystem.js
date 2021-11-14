const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data');
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]','utf-8');
}

const saveContact = (name,phone,email) => {
    let contact = {name,phone,email};

    if(!validator.isMobilePhone(phone,'id-ID')){
        console.log(chalk.bgRed.white('Please type valid mobile phone'));
        return false;
    }
    if(email !== undefined && !validator.isEmail(email)){
        console.log(chalk.bgRed.white('Please type valid email!'));
        return false;
    }

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