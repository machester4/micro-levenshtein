const { json, send } = require("micro");
const suggest = require("./lib/suggest");

/*
  	"text": "chivitooo comn de jamon con muzarela yyy rucula #~#@#~|@#|@ con 1kg de requesooon!",
    "dict": "chivito",
    "rules": "es"
*/

module.exports = async (req, res) => {
  try {
    const { text, dict, rules } = await json(req);
    if (!text || !dict) throw "text or dict param not found";
    console.log(text, dict);
    const suggestion = await suggest(text, dict, rules);
    return {
      suggestion
    };
  } catch (error) {
    console.error(error);
    send(res, 400, { error });
  }
};
