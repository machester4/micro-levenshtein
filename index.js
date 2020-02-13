const { json, send } = require("micro");
const suggest = require("./lib/suggest");

module.exports = async (req, res) => {
  try {
    const { text, dict } = await json(req);
    if (!text || !dict) throw "text or dict param not found";
    console.log(text, dict);
    const suggestions = await suggest(text, dict);
    return {
      suggestions
    };
  } catch (error) {
    send(res, 400, { error });
  }
};
