const fs = require('fs').promises;
const path = require('path');
const filePath = './database.json';


async function readData() {
    try {
        let data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
    }
}

async function writeData(data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
   readData,
   writeData
};