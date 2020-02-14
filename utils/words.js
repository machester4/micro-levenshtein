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
  const regex = /^[a-zA-Z\u00C0-\u00FF]+$/gi;
  return regex.test(word);
}

function isMarksOrNumber(word) {
  const regex = /[¿?!¡,.:;]|[0-9]/gi;
  return regex.test(word);
}

function isMetric(word) {
  const regex = /(\d+).?(\d*)\s*(kg|g|lt)/gi;
  return regex.test(word);
}

function getWordsFromText(text) {
  if (!text) return [];
  return text.split(" ");
}

module.exports = {
  filterWordsByLength,
  getWordsFromText,
  isWord,
  isMarksOrNumber,
  isMetric
};
