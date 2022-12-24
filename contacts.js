const fs = require('fs').promises;
const { nanoid } = require('nanoid');
const path = require('path');
const contactsPath = path.resolve(__dirname, './db/contacts.json');


async function listContacts() {
  
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
  const result = await JSON.parse(data);
    await console.table(result);

  } catch (error) {
    console.log(error.message)
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const dataJson = await JSON.parse(data);
    const contact = await dataJson.find(
      (item) => Number(item.id) === contactId
    );
    console.log(contact);
  } catch (e) {
    console.error(e);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parsedData = await JSON.parse(data);
    const delContact = await parsedData.find(
      (item) => Number(item.id) === contactId
    );
    if (delContact) {
      const index = parsedData.indexOf(delContact);
      parsedData.splice(index, 1);
      await fs.writeFile(contactsPath, JSON.stringify(parsedData,null,2), "utf-8");
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
    const data = await fs.readFile(contactsPath, 'utf8');
    const parsedData = JSON.parse(data);
    const id = nanoid();
    const contactNew = { id, name, email, phone };
    const newContactsList = [...parsedData, contactNew];
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