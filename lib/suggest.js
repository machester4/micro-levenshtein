const levenshtein = require("js-levenshtein");
const dictionary = require("../utils/dictionary");
const sanitize = require("../utils/sanatizer");
const {
  getWordsFromText,
  isWord,
  isMarksOrNumber,
  isMetric
} = require("../utils/words");

// damerau-levenshtein 260ms
// js-levenshtein 40ms

function injectSuggestions(dict, words) {
  const distance = 3;
  const result = [];
  words.forEach(word => {
    if (isWord(word)) {
      // Get suggestions
      let suggestions = [];
      dict.forEach(w => {
        let wDistance = levenshtein(word, w);
        if (wDistance <= distance) {
          suggestions.push({ word: w, distance: wDistance });
        }
      });

      // Order suggestions
      suggestions = suggestions
        .sort((a, b) => {
          if (a.distance > b.distance) {
            return 1;
          }
          return -1;
        })
        .map(s => s.word);

      if (!suggestions.length || suggestions[0] === word) {
        result.push(word);
      } else {
        result.push(suggestions);
      }
    } else if (isMarksOrNumber(word) || isMetric(word)) {
      result.push(word);
    }
  });
  return result;
}

async function suggest(text, dict) {
  const dictWords = await dictionary(dict);
  const textSanitized = sanitize(text);
  const textWords = getWordsFromText(textSanitized);
  console.log(textWords);
  const injectionResult = injectSuggestions(dictWords, textWords);
  return injectionResult;
}

module.exports = suggest;
