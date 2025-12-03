const filePath = require("../database.json");
const { readData, writeData } = require("../utils/file.js");

//controller file. controller files handle user input and application logic

async function createUser(req, res) {
  try {
    //need the data from the file
    const data = await readData();

    //logic to auto increment the id
    const lastUser = data.users[data.users.length - 1];

    //what happers if there are no users?
    const nextId = lastUser ? lastUser.id + 1 : 0;

    //creating the new user object
    const newUser = {
      id: nextId,
      first_name: req.body.first_name,
      username: req.body.username,
      email: req.body.email,
    };

    //push the data to the users array object
    data.users.push(newUser);

    //write the data back to the file
    await writeData(data);

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createUser,
};
