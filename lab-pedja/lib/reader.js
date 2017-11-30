'use strict';

const fileReader = module.exports = {};
const fs = require('fs');

fileReader.readFile = (paths, callback) => {
  let returnedArray = [];
  fs.readFile(paths[0], (error,data) => {
    if(error)
      return callback(error);
    returnedArray.push(data.toString());
  });
  fs.readFile(paths[1], (error,data) => {
    if(error)
      return callback(error);
    returnedArray.push(data.toString());
  });
  fs.readFile(paths[2], (error,data) => {
    if(error)
      return callback(error);
    returnedArray.push(data.toString());
    console.log(returnedArray);
    callback(null,returnedArray);
  });
};
