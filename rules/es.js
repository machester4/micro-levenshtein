module.exports = {
  "?"(currentWords, nextWord) {
    const regex = /^¿/;
    const firstWord = Object.keys(currentWords)[0];
    if (!regex.test(firstWord)) {
      if(!currentWords[firstWord]) {
        currentWords[firstWord] = [`¿${firstWord}`];
      } else {
        currentWords[firstWord] = currentWords[firstWord].map(w => `¿${w}`);
      }
    }
    return currentWords;
  },
  "!"(currentWords, nextWord) {
    const regex = /^¡/;
    const firstWord = Object.keys(currentWords)[0];
    if (!regex.test(firstWord)) {
      if(!currentWords[firstWord]) {
        currentWords[firstWord] = [`¡${firstWord}`];
      } else {
        currentWords[firstWord] = currentWords[firstWord].map(w => `¡${w}`);
      }
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
};
