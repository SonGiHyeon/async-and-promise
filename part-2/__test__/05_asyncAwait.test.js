const { readAllUsersAsyncAwait } = require('../05_asyncAwait');

// delete comment
const MULTI_LINES_COMMENT = /\/\*[\s\S]*?\*\/(\r?\n|\r)/;
const ONE_LINE_COMMENT = /\/\/.*(\r?\n|\r)/;
const COMMENT = new RegExp(
  `${MULTI_LINES_COMMENT.source}|${ONE_LINE_COMMENT.source}`,
  'g'
);
const funcBody = readAllUsersAsyncAwait.toString().replace(COMMENT, '');

describe('async/await Test', () => {
  describe('readAllUsersAsyncAwait', () => {
    test('async 키워드를 사용한 함수는 AsyncFunction의 인스턴스입니다', () => {
      const AsyncFunction = Object.getPrototypeOf(
        async function () {}
      ).constructor;
      expect(readAllUsersAsyncAwait).toBeInstanceOf(AsyncFunction);
    });

    test('await 키워드만 이용해 배열이 리턴되어야 합니다', async () => {
      const result = await readAllUsersAsyncAwait();
      expect(Array.isArray(result)).toBe(true);
      const matched = funcBody.match(/await/g);
      expect(matched).not.toBeFalsy();
    });

    test('user1.json의 내용과 user2.json 내용을 합쳐 배열로 리턴되어야 합니다', async (done) => {
      readAllUsersAsyncAwait().then((result) => {
        const userArray = [
          {
            name: 'AliceKim',
            age: 26,
            sex: 'FeMale',
            company: {
              name: '로켓부스트',
            },
          },
          {
            name: 'BobLee',
            age: 40,
            sex: 'Male',
            company: {
              name: 'Anonymous',
            },
          },
        ];
        expect(result).toEqual(userArray);
        done();
      });
    });
  });
});
