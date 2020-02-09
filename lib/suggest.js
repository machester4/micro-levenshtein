const levenshtein = require("js-levenshtein");
const Dictionary = require("../utils/dictionary");
const { filterByLength } = require("../utils/words");

// damerau-levenshtein 260ms
// js-levenshtein 40ms

async function suggest(word, dict) {
  const distance = 1;
  const dictionary = await Dictionary(dict);
  const words = filterByLength(word, dictionary);
  console.log(words);
  const suggestions = words.filter(w => levenshtein(word, w) <= distance);
  return suggestions;
}

module.exports = suggest;
