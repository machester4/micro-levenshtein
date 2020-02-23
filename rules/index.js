module.exports = {
  validateLangRules(rules, word, currentWords, nextWord) {
    const langRules = require(`./${rules}`);

    if (!word) return currentWords;
    const rule = langRules[word];
    if (typeof rule === "function") {
      return rule(currentWords, nextWord);
    }
    return currentWords;
  }
};
