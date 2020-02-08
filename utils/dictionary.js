const path = require("path");
const { existsFile, readFile } = require("./file");

function Dictionary(lang) {
  return new Promise((resolve, reject) => {
    try {
      const dic_path = path.resolve(__dirname, "../dict") + "/" + lang + ".dic";
      console.log(dic_path);
      existsFile(dic_path, exists =>
        exists
          ? readFile(dic_path, resolve)
          : reject("The dictionary file not found")
      );
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = Dictionary;
