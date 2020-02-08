const levenshtein = require("js-levenshtein");
const Dictionary = require("../utils/dictionary");

// damerau-levenshtein 260ms
// js-levenshtein 40ms
// https://github.com/sbosio/rla-es
// https://github.com/sbosio/rla-es/tree/master/ortograf/palabras/RAE

async function check(word, lang) {
  const distance = 1;
  const words = await Dictionary(lang);
  const suggestions = words.filter(w => levenshtein(word, w) <= distance);
  return suggestions;
}

module.exports = check;
