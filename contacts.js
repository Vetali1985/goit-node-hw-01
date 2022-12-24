const fs = require('fs').promises;
const { nanoid } = require('nanoid');
const path = require('path');
const contactsPath = path.resolve(__dirname, './db/contacts.json');

async function readData() {
  const data = await fs.readFile(contactsPath, 'utf8');
  const result = await JSON.parse(data);
  return result;
}
async function listContacts() {
    const result= await readData()
    await console.table(result);
}

async function getContactById(contactId) {
    const result= await readData()
    const contact = await result.find(
      (item) => Number(item.id) === contactId
    );
    console.log(contact);
}

async function removeContact(contactId) {
  try {
    const result= await readData()
    const delContact = await result.find(
      (item) => Number(item.id) === contactId
    );
    if (delContact) {
      const index = result.indexOf(delContact);
      result.splice(index, 1);
      await fs.writeFile(contactsPath, JSON.stringify(result,null,2), "utf-8");
    } else {
      return console.log(`Contact with id=${contactId} not found!!!`.red);
    }
    await console.log(`Contact with id=${contactId} is removed`.green);
  } catch (e) {
    console.error(e);
  }
}

  
async function addContact(name, email, phone) {
  try {
    const result= await readData()
    const id = nanoid();
    const contactNew = { id, name, email, phone };
    const newContactsList = [...result, contactNew];
    await fs.writeFile(contactsPath, JSON.stringify(newContactsList, null, 2));
    
} catch (error) {
  console.log(error.message)
}

}





module.exports = {
    
  listContacts,
  getContactById,
  removeContact,
  addContact,
}