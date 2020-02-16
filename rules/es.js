module.exports = {
  "?"(currentWords, nextWord) {
    const regex = /^¿/;
    const firstWord = currentWords[0];
    if (!regex.test(firstWord)) {
      currentWords.unshift({ "¿": ["¿"] });
    }
    return currentWords;
  },
  "!"(currentWords, nextWord) {
    const regex = /^¡/;
    const firstWord = currentWords[0];
    if (!regex.test(firstWord)) {
      currentWords.unshift({ "¡": ["¡"] });
    }
    return currentWords;
  },
  y(currentWords, nextWord) {
    const regex = /^i|hi/;
    const lastWordIndex = currentWords.length - 1;
    const lastWord = currentWords[lastWordIndex];
    if (regex.test(nextWord)) {
      currentWords[lastWordIndex] = { [lastWord]: ["e"] };
    }
    return currentWords;
  },
  validate(rule, currentWords, nextWord) {
    if (typeof this[rule] === "function")
      return this[rule](currentWords, nextWord);
    return currentWords;
  }
};
