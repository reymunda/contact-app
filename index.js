const {saveContact, makeQuestion} = require('./filesystem');
// let contacts = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf-8'));



// rl.question('Enter your name: ', (name) => {
//     rl.question('Enter your phone number: ', (phone) => {
//        let contact = {name, phone};
//        contacts.push(contact);

//        fs.writeFile('./data/contacts.json', JSON.stringify(contacts), (err) => {
//         if(err) throw err;
//        })
//        console.log('Data successfully entered!');

//        rl.close();
//     })
// })

const main = async () => {
    const name = await makeQuestion("Enter your name          : "),
          phone = await makeQuestion("Enter your mobile phone  : "),
          email = await makeQuestion("Enter your email         : ");

          saveContact(name,phone,email);
}

main();