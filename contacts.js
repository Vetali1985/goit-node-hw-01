const fs = require('fs');
const path = require('path');


function listContacts() {
  const contactsPath = fs.readFile(path.resolve('contacts.json'), 'utf8', (error, contacts) => {
  if (error) {
    console.error(error)
     }
    console.log(contacts)
  })
  return contactsPath; 
} 

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}





module.exports = {
    
    listContacts,
}