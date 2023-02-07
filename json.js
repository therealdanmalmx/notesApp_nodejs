const fs = require('fs');
// const testJson = require('./test-json.json')

// const someInfo = JSON.stringify(testJson);

// const fileInfo = fs.writeFileSync('someInfoJson.json', someInfo);

// const dataBuffer = fs.readFileSync('someInfoJson.json')

// const dataJSON = JSON.parse(dataBuffer.toString());

// console.log(dataJSON)

const dataBuffer = fs.readFileSync("someInfoJson.json");
const user = JSON.parse(dataBuffer.toString());

user.name = "Mikael";
user.age = 26;

const userJSON = JSON.stringify(user);

fs.writeFileSync('someInfoJson.json', userJSON);

const getuser = fs.readFileSync("someInfoJson.json");
const parsedUser = JSON.parse(getuser);

console.log(parsedUser.name)


