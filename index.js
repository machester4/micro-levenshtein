const { json } = require("micro");
const check = require("./lib/checker");

module.exports = async req => {
  try {
    const { word, lang } = await json(req);
    console.log(word, lang);
    const suggestions = await check(word, lang);
    return {
      suggestions
    };
  } catch (error) {
    return error;
  }
};
