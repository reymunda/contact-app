# Contact App (CLI)
Add,remove,view, and update contact data in terminal with NodeJS, JSON, Yargs, Validator. The phone number (ID phone number only) and email will be validated.

## npm install
Install this CLI

## node index add --phone="081791791" --name="John Doe" --email="johndoe@gmail.com"
Add new contact with parameter: (The data will be stored in JSON)
- phone (must)
- name (must)
- email (optional)

## node index list
View the contacts

## node index detail --phone="081234567"
View 081234567 contact detail
Return: 
- Phone
- Name
- Email

## node index remove --phone="081234567"
Remove contact "081234567" from the list

