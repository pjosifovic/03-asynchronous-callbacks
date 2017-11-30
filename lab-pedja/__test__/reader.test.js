'use strict';

const fileReader = require('../lib/reader');

const paths = [
  `${__dirname}/../assets/file1.txt`,
  `${__dirname}/../assets/file2.txt`,
  `${__dirname}/../assets/file3.txt`];

describe('reader.test.js', () => {
  test('If not error is found, text from all three files should be shown as an item in an array', (done) => {
    fileReader.readFile(paths, (error,data) => {
      expect(error).toBeNull();
      expect(data).toEqual(['file1\n','file2\n','file3\n']);
      done();
    });
  });
});
