const esRules = require('./es');

module.exports = {
  es: esRules,
  validateLangRules(rules, word, currentWords, nextWord) {
    if (!word) return currentWords;
    const rule = esRules[word]; // this[rules][word];
    if (typeof rule === 'function') {
      return rule(currentWords, nextWord);
    }
  
    return currentWords;
  }
}
