function stringLength (text, сharacters) {
  if (text.length > сharacters) {
    return 'Результат: false — строка не проходит';
  }
  return 'Результат: true - строка проходит по длине';
}

console.log(stringLength('проверяемая строка', 10));

function checkPalindrome (stringToTest) {
  invertedString = stringToTest.split('').reverse().join('');
  if (invertedString.toLowerCase().replace(/\s/g,'') == stringToTest.toLowerCase().replace(/\s/g,'')) {
    return 'строка является палиндромом';
  }
  return 'это не палиндром';
}

console.log(checkPalindrome('Леша на полке клопа нашел'));

function NumbersFromString (stringToTest) {
  if (Number.isInteger(stringToTest)) {
    return Math.abs(stringToTest);
  }
  numbers = stringToTest.replace(/[^0-9\s]/gi,'').split(' ').join('');
  return Number(numbers);
}

console.log(NumbersFromString('1 кефир, 0.5 батона'));

function StringToFileAddress (originalString, minimumLength, additionalCharacters) {

  if (minimumLength <= originalString.length) {
    return originalString;
  } else if (minimumLength > originalString.length) {
    const characters = minimumLength - originalString.length;
    if (additionalCharacters.length >= characters) {
      additionalCharacters = additionalCharacters.substring (0, characters);
      // eslint-disable-next-line no-return-assign
      return originalString = additionalCharacters + originalString;
    } else if (additionalCharacters.length < characters) {
      // eslint-disable-next-line eqeqeq
      while (originalString.length != minimumLength) { /* empty */
        originalString = additionalCharacters + originalString;
        if (additionalCharacters.length != 1) {
          additionalCharacters = additionalCharacters.substring (0, additionalCharacters.length - 1);
        }
      }
    }
    return originalString;
  }

}

// eslint-disable-next-line no-console
console.log(StringToFileAddress('qwerty', 4, '0'));
