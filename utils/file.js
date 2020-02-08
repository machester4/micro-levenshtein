const fs = require("fs");

function readFile(file_path, callback) {
  fs.readFile(file_path, "utf8", function(err, text) {
    if (!err) {
      callback(text.split("\n"));
    } else {
      throw "The dictionary file could not be read: " + err;
    }
  });
}

function existsFile(file_path, callback) {
  fs.exists(file_path, callback);
}

module.exports = {
  readFile,
  existsFile
};
