const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.resolve('contacts.json');

async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf8');
  const result = await JSON.parse(data);
  try {
    await console.log(result)
  } catch (error) {
    console.log(error.message)
  }
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