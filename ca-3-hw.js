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
