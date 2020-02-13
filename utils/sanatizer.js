function sanatizerSpecialCharacters(text) {
  const separator = " ";
  const reQuestionStart = /\¿s*\s*/g;
  const reQuestionEnd = /\s*\?s*/g;
  const reExclamationStart = /\¡s*\s*/g;
  const reExclamationEnd = /\s*\!s*/g;
  const reComma = /\s*\,s*/g;
  return text
    .replace(reQuestionStart, `¿${separator}`)
    .replace(reQuestionEnd, `${separator}?`)
    .replace(reExclamationStart, `¡${separator}`)
    .replace(reExclamationEnd, `${separator}!`)
    .replace(reComma, `${separator},`);
}

function sanitize(text) {
  const regex = /[^\w\s+¿?!¡,.\u00C0-\u00FF]|(.)(?=\1)/gi;
  let parsed = text.toLowerCase();
  parsed = sanatizerSpecialCharacters(text);
  parsed = parsed.replace(regex, "");
  return parsed;
}

module.exports = sanitize;
