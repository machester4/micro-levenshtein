const levenshtein = require("js-levenshtein");
const dictionary = require("../utils/dictionary");
const sanitize = require("../utils/sanatizer");
const { validateLangRules } = require("../rules");
const { getWordsFromText, isWord } = require("../utils/words");

// damerau-levenshtein 260ms
// js-levenshtein 40ms

function injectSuggestions(dict, words, rules) {
  const distance = 2;
  let result = {};
  words.forEach((word, i) => {
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
        result[word] = null;
      } else {
        result[word] = suggestions;
      }
    } else {
      result[word] = [];
      result = validateLangRules(rules, word, result, words[i + 1]);
    }
  });
  return result;
}

async function suggest(text, dict, rules) {
  const dictWords = await dictionary(dict);
  const textSanitized = sanitize(text);
  const textWords = getWordsFromText(textSanitized);
  console.log(textWords);
  const injectionResult = injectSuggestions(dictWords, textWords, rules);
  return injectionResult;
}

module.exports = suggest;
