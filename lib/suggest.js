const levenshtein = require("js-levenshtein");
const Dictionary = require("../utils/dictionary");
const { filterByLength, sanatizer } = require("../utils/words");

// damerau-levenshtein 260ms
// js-levenshtein 40ms

function injectSuggestions(dict, words) {
  const distance = 1;
  const result = [];
  words.forEach(word => {
    // Get suggestions
    let suggestions = dict.filter(w => levenshtein(word, w) <= distance);

    // order
    suggestions = suggestions.sort((a, b) => {
      let aDist = levenshtein(word, a);
      let bDist = levenshtein(word, b);
      if(aDist > bDist) {
        return 1
      }
      return -1
    });

    if(!suggestions.length) {
      result.push(word);
    } else {
      result.push(suggestions);
    }
  });
  return result;
}

async function suggest(text, dict) {
  const words = await Dictionary(dict);
  const textWords = sanatizer(text).split(" ");
  const injectionResult = injectSuggestions(words, textWords);
  return injectionResult;
}

module.exports = suggest;
