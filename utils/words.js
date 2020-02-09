function filterByLength(word, words) {
  // the filtered letter can have <low_diff> letters less or <high_diff> letters more
  const low_diff = 1;
  const high_diff = 2;
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

module.exports = {
  filterByLength
};
