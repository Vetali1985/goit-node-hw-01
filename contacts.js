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
async function getContactById(contactId) {
   

  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const dataJson = await JSON.parse(data);
    const contact = await dataJson.find((contact) => Number(contact.id)===contactId)
    await console.log(contact)
  }
  catch (error) {
    console.log(error.message)
  }
}

async function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
  // ...твій код
}





module.exports = {
    
  listContacts,
  getContactById,
  removeContact,
  addContact,
}