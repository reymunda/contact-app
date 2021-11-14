const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

if(!fs.existsSync('./data')){
    fs.mkdirSync('./data');
}

if(!fs.existsSync('./data/contacts.json')){
    fs.writeFileSync('./data/contacts.json','[]','utf-8');
}

const loadContact = () => {
    let file = fs.readFileSync('./data/contacts.json','utf-8');
    if(file == ""){
        fs.writeFileSync("./data/contacts.json", "[]");
    }
    return JSON.parse(file);
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

    let contacts = loadContact();
    let duplicate = contacts.find(e => e.phone === phone);
    
    if(duplicate !== undefined){
        console.log(chalk.bgRed.white("Contact has been saved in the list!"));
    }else{
        contacts.push(contact);
        fs.writeFile('./data/contacts.json', JSON.stringify(contacts,null,2), (err) => {
            if(err) throw err;
        })
    
        console.log(chalk.bgHex("#019421").white('Contact successfully added!'));
    }
}

const listContact = () => {
    let contacts = loadContact();
    contacts.forEach((e,i) => {
        console.log(`${i+1}. Name: ${e.name} Phone: ${e.phone} Email: ${e.email ? e.email : "-"}`)
    })
}

const removeContact = (phone) => {
    
    const contacts = loadContact();

    const isExist = contacts.find(e => e.phone === phone);
    if(!isExist){
        console.log(chalk.bgRed.white('The contact is not available or has been removed!'));
        return false;
    }

    const result = new Promise(resolve => {
        resolve(
            contacts.filter(e => {
            return removed = e.phone !== phone;
        }));
    })
    .then(result => {
        fs.writeFile('./data/contacts.json', JSON.stringify(result,null,2), (err) => {
            if(err) throw err;
        })
    })

    console.log(chalk.bgHex("#019421").white(`${phone} is successfully removed!`));
}

module.exports = {saveContact,listContact,removeContact};