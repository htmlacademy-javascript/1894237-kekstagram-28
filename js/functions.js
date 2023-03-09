function checkStringLength(text, сharacters) {
  return text.length <= сharacters;
}

checkStringLength('проверяемая строка', 10);

function checkPalindrome(stringToTest) {
  const invertedString = stringToTest.split('').reverse().join('');
  return (invertedString.toLowerCase().replace(/\s/g, '') === stringToTest.toLowerCase().replace(/\s/g, ''));
}

checkPalindrome('Леша на полке клопа нашел');

function getNumbersFromAString(stringToTest) {
  if (Number.isInteger(stringToTest)) {
    return Math.abs(stringToTest);
  }
  const numbers = stringToTest.replace(/[^0-9]/g, '');
  return Number(numbers);
}

getNumbersFromAString('агент 007');

function getFileAddress(originalString, minimumLength, additionalCharacters) {

  const characters = minimumLength - originalString.length;

  if (additionalCharacters.length >= characters) {
    additionalCharacters = additionalCharacters.substring(0, characters);
    originalString = additionalCharacters + originalString;
    return originalString;
  }
  if (additionalCharacters.length < characters) {

    while (originalString.length !== minimumLength) {
      originalString = additionalCharacters + originalString;
      if (additionalCharacters.length !== 1) {
        additionalCharacters = additionalCharacters.substring(0, additionalCharacters.length - 1);
      }
    }
    return originalString;
  }
  return originalString;
}
getFileAddress('q', 4, 'we');
