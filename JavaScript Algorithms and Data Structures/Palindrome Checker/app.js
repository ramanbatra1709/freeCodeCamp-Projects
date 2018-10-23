function palindrome(str) {
  let cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}
