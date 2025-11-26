const fs = require('fs').promises;
const filePath = require('./database.json');

async function readData() {
  try {
      let data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data);
  } catch (error) {
    console.error(error)
  }
}

async function writeData(data) {
  try {
    await fs.writeFile(data, null, 2);
     
  } catch (error) {
    console.error(error)
  }
}


module.exports = {
  readData,

};