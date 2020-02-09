const { json } = require("micro");
const suggest = require("./lib/suggest");

module.exports = async req => {
  try {
    const { word, dict } = await json(req);
    console.log(word, dict);
    const suggestions = await suggest(word, dict);
    return {
      suggestions
    };
  } catch (error) {
    return error;
  }
};
