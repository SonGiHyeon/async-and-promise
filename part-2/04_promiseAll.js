const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  const result = Promise.all([getDataFromFilePromise(user1Path), getDataFromFilePromise(user2Path)])
    .then(([user1, user2]) => {
      return [JSON.parse(user1), JSON.parse(user2)];
    });
  return result;
}

// readAllUsers()

module.exports = {
  readAllUsers
}