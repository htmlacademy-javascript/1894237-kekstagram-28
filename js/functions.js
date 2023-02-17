const checkingLengthString = (text, сharacters) => text.length <= сharacters;

checkingLengthString('проверяемая строка', 10);

function checkPalindrome (stringToTest) {
  const invertedString = stringToTest.split('').reverse().join('');
  if (invertedString.toLowerCase().replace(/\s/g,'') === stringToTest.toLowerCase().replace(/\s/g,'')) {
    return 'строка является палиндромом';
  }
  return 'это не палиндром';
}

checkPalindrome('Леша на полке клопа нашел');

function NumbersFromString (stringToTest) {
  if (Number.isInteger(stringToTest)) {
    return Math.abs(stringToTest);
  }
  const numbers = stringToTest.replace(/[^0-9\s]/gi,'').split(' ').join('');
  return Number(numbers);
}

NumbersFromString('1 кефир, 0.5 батона');

function StringToFileAddress (originalString, minimumLength, additionalCharacters) {

  const characters = minimumLength - originalString.length;

  if (additionalCharacters.length >= characters) {
    additionalCharacters = additionalCharacters.substring (0, characters);
    originalString = additionalCharacters + originalString;
    return originalString;
  } else if (additionalCharacters.length < characters) {

    while (originalString.length !== minimumLength) {
      originalString = additionalCharacters + originalString;
      if (additionalCharacters.length !== 1) {
        additionalCharacters = additionalCharacters.substring (0, additionalCharacters.length - 1);
      }
    }
    return originalString;
  }
  return originalString;
}

StringToFileAddress('q', 4, 'we');
