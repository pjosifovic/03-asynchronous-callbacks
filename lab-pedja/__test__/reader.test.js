'use strict';

const fileReader = require('../lib/reader');

const paths = [
  `${__dirname}/../assets/file1.txt`,
  `${__dirname}/../assets/file2.txt`,
  `${__dirname}/../assets/file3.txt`];

const invalidPaths = [
  `${__dirname}/../assets/file1.rtf`,
  `${__dirname}/../assets/file2.rtf`,
  `${__dirname}/../assets/file3.rtf`];

describe('reader.test.js', () => {
  test('If not error is found, text from all three files should be shown as an item in an array', (done) => {
    fileReader.readFile(paths, (error,data) => {
      expect(error).toBeNull();
      expect(data).toEqual(['file1\n','file2\n','file3\n']);
      done();
    });
  });
  test('If invalid file paths are used', (done) => {
    fileReader.readFile(invalidPaths, (error) => {
      expect(error).not.toBeNull();
      done();
    });
  });
  test('If invalid file paths order is not correct, error will be thrown', (done) => {
    fileReader.readFile([`${__dirname}/../assets/file2.txt`, `${__dirname}/../assets/file1.txt`, `${__dirname}/../assets/file3.txt`], (error) => {
      expect(error).toBeNull();
      done();
    });
  });
});
