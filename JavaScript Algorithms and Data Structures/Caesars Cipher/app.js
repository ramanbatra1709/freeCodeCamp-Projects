const shiftCipher = (char) => char.charCodeAt(0) <=90 && char.charCodeAt(0) >= 65 ? char.charCodeAt(0) + 13 <= 90 ? String.fromCharCode(char.charCodeAt(0) + 13) : String.fromCharCode(char.charCodeAt(0) - 13) : char;

function rot13(str) {
  return str.split('').map(shiftCipher).join('');
}

console.log(rot13("SERR PBQR PNZC"));
