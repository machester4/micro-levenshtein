function filterWordsByLength(word, words) {
  // the filtered letter can have <low_diff> letters less or <high_diff> letters more
  const lowDiff = 3;
  const highDiff = 2;
  const result = words.filter(w => {
    const diff = Math.abs(word.length - w.length);
    const sign = Math.sign(word.length - w.length);

    if (sign <= 0) {
      // is greater than received
      return diff <= highDiff;
    }
    return diff >= lowDiff;
  });
  return result;
}

function isWord(word) {
  const regex = /[\w\s+\u00C0-\u00FF]|(.)(?=\1)/gi;
  return regex.test(word);
}

function getWordsFromText(text) {
  if (!text) return [];
  return text.split(" ");
}

module.exports = {
  filterWordsByLength,
  getWordsFromText,
  isWord
};
