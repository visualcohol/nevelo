let defaultOptions = {
  uppercase: false,
};

function nevelo(word, options = defaultOptions) {
  let vowel = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű'];
  let wordFirstLetterLowercase = word.charAt(0).toLowerCase();
  let article = '';

  article = vowel.includes(wordFirstLetterLowercase) ? 'az' : 'a';

  // Options: uppercase
  if (options.uppercase) {
    article = article.charAt(0).toUpperCase() + article.slice(1);
  }

  return article;
}
