var digits = [2, 6, 8, 1, 4, 9, 0, 5, 0, 1, 4, 4, 8, 7, 6, 3, 2, 2, 7, 0, 3, 0, 9, 1, 3, 1, 5, 6, 5, 7, 5, 3];
var storeAllPrevious = [];
for(var i in digits) {
  if(digits[i] === 3) {
    var digitLength = digits.length - 1;
    if(parseInt([i]) !== digitLength) {
      var getPrevNum = parseInt([i]) + 1;
      storeAllPrevious.push(digits[getPrevNum])
    }
  }
}
console.log("Result: "+ storeAllPrevious);
console.log("Count: "+ storeAllPrevious.length);
