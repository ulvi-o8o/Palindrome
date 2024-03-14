//function isPolindrome(num) {
//   var reversedNum = "";

//   for (var i = 4; i >= 0; i--) {
//     reversedNum += num[i];
//   }

//   if (num === reversedNum) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPolindrome(1221));

// var reversedNum = "";

// for (var i = num.length-1; i>=0; i-- ) {

//     reversedNum += num[i]
// }
// }

function isPalindrome(num) {
  if (num < 0) return false;

  var originalNum = num;
  var reversedNum = 0;

  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return originalNum === reversedNum;
}

console.log(isPalindrome(45654));
console.log(isPalindrome(8956));
console.log(isPalindrome(85258));

// ANAGRAM

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  //   if (cleanStr1.length !== cleanStr2.length) {
  //     return false;
  //   }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("world", "low"));

// Palindrome

function isPalindrome(num) {
  const numStr = String(num);

  return numStr === numStr.split("").reverse().join("");
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12345)); // false
console.log(isPalindrome(1213121));
