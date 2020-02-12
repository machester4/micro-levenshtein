function filterWordsByLength(word, words) {
  // the filtered letter can have <low_diff> letters less or <high_diff> letters more
  const low_diff = 3;
  const high_diff = 3;
  const result = words.filter(w => {
    const diff = Math.abs(word.length - w.length);
    const sign = Math.sign(word.length - w.length);

    if (sign <= 0) {
      // is greater than received
      return diff <= high_diff;
    }
    return diff >= low_diff;
  });
  return result;
}

function sanatizer(text) {
  const reDuplicates = new RegExp(/[^\w\s+¿?!¡,.]|(.)(?=\1)/gi);
  const reQuestionStart = new RegExp(/\¿s*\s*/g);
  const reQuestionEnd = new RegExp(/\s*\?s*/g);
  const reExclamationStart = new RegExp(/\¡s*\s*/g)
  const reExclamationEnd = new RegExp(/\s*\!s*/g);
  const reComma = new RegExp(/\s*\,s*/g);
  return text
            .replace(reDuplicates, "")
            .replace(reQuestionStart, "¿")
            .replace(reQuestionEnd, "?")
            .replace(reExclamationStart, "¡")
            .replace(reExclamationEnd, "!")
            .replace(reComma, ",");
}

function getWordsFromText(text) {
  return sanatizer(text).split(" ");
}

module.exports = {
  filterWordsByLength,
  sanatizer,
};
