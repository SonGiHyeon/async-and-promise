const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
  const parseArr = [];
  const result = await Promise.all([getDataFromFilePromise(user1Path),
  getDataFromFilePromise(user2Path)
  ]);

  for (let i = 0; i < result.length; i++) {
    parseArr.push(JSON.parse(result[i]));
  }

  return parseArr;
};

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}