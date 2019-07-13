"use strict";
var n;
var i;

/* Exercise 1 - .n שמדפיסה את כל המספרים מ 1 ועד (while יש לרשום לולאה (מסוג */
n = 20;
i = 1;
while (i <= n) {
    console.log(i);
    i++;
}


/* Exercise2 - לאחור.n שמדפיסה את כל המספרים שיש עד לפרמטר (while יש לרשום לולאה (מסוג */
n = 20;
i = 1;
while (i <= n) {
    console.log(n);
    n--;
}


/* Exercise 3 - שמדפיסה את כל המספרים הזוגיים בין 1 ל 100 (while יש לרשום לולאה (מסוג */
n = 100;
i = 1;
while (i <= n) {
    if (i % 2 === 0) { // finding only even numbers
        console.log(i);
    }
    i++;
}


/* Exercise 4 - .n יש לרשום לולאה שמדפיסה את סכום כל המספרים מ 1- ועד */
var sumAllNumbersFrom1ToN = 0
for (n = 20, i = 1; i <= n; i++) {
    sumAllNumbersFrom1ToN = sumAllNumbersFrom1ToN + i;
}
console.log(sumAllNumbersFrom1ToN);


/* Exercise 5 - יש לרשום לולאה בתוך לולאה שמדפיסה את לוח הכפל. */
(function () { //IIFE - immediatly invoked function expression
    n = 10
    for (var row = 1; row <= n; row++) {
        var tempString = " ";
        for (var column = 1; column <= 10; column++) {
            tempString = tempString + Pad((row * column)) + " ";
        }
        console.log(tempString);
    }

    function Pad(num) {
        if (num < 10) {
            return num + " ";
        }
        return num;
    }
})();


/* Exercise 6 - (יש לרשום לולאה שהופכת מספר (לדוגמה: 12345 יהפוך ל 54321 */
var originalNum = Math.round(Math.random() * 10000);
console.log(originalNum);
var InverseNum = 0;
while (originalNum > 0) {
    InverseNum = (InverseNum * 10) + (originalNum % 10);
    originalNum = (originalNum - (originalNum % 10)) / 10;
}
console.log(InverseNum);


/* Exercise 7 - יש לרשום תכנית שבודקת האם מספר הוא פאלינדרום (שאם נרשום את המספר( מהסוף להתחלה נקבל את אותו המספר, לדוגמה, המספר 12321 */
var originalNumber = Math.round(Math.random() * 10000);
console.log(originalNumber);

var InverseNumber = PalindromeNumber(originalNumber);
console.log(InverseNumber);

if (originalNumber === InverseNumber) {
    console.log("This is a palindrome number")
} else {
    console.log("This is not a palindrome number")
}

function PalindromeNumber(originalNum) {
    var InverseNum = 0;
    while (originalNum > 0) {
        InverseNum = (InverseNum * 10) + (originalNum % 10);
        originalNum = (originalNum - (originalNum % 10)) / 10;
    }
    return InverseNum;
}


/* Exercise 8 - יש לכתוב לולאה שמחשבת חזקה רביעית של המספר 4 (4 בחזקת 4)ץ */
var num = 4;
var total = 1;
for (var i = 1; i <= num; i++) {
    total = total * num;
}
console.log(total);


/* Exercise 9 -  יש לכתוב לולאה שמחשבת עצרת של מספר, נניח 4 */
var factorial = 1;
var num = Math.round(Math.random() * 5);
for (var i = 0; i < num; i++) {
    var factorial = factorial * (num - i);
}
console.log(num + "! = " + factorial);


/* Exercise 10 -  יש לכתוב קטע קוד שמוצא את המחלק המשותף המקסימלי של 2 מספרים.
https://he.wikipedia.org/wiki/%D7%9E%D7%97%D7%9C%D7%A7_%25D
לדוגמה: המחלק המשותף המקסימלי של 1071 ו־ 1029 הוא 21 .b */
(function () { 
    function MaxDivider(num1, num2) {
        var i = Math.min(num1, num2); // finding the minimum number out of the two
        while (i !== 1 && !(num1 % i === 0 && num2 % i === 0)) {
            i--;
        }
        return (i);
    }
    var x = MaxDivider(1071, 1029);
    console.log("the max common divider is " + x + ".");
})();


/* Exercise 11 - יש לכתוב קטע קוד שבודק האם מספר נתון הוא ראשוני או לא.
https://he.wikipedia.org/wiki/%D7%9E%D7%A1%D7%A4%D7%A8_%25 */
(function () { 
    function IsPrimeNumber(n) {
        var i = 2;
        while (i < n) {
            if (n % i === 0) {
                return false;
            }
            i++;
        }
        return true;
    }
    var x = 5;
    console.log("is " + x + " prime number = " + IsPrimeNumber(x));
})();


/* Exercise 12 -  יש לכתוב קטע קוד שבודק האם מספר הוא מספר ארמסטרונג
 armstrong number - is a number that is the sum of its own digits each raised to the power of the number of
  digits */
(function () {
    function NumberOfDigit(num) {
        var i = 0;
        while (num > 0) {
            num = (num - (num % 10)) / 10;
            i++;
        }
        return i;
    }

    function IsArmstrong(number) {
        var numberOfDigitInNumber = NumberOfDigit(number);
        var reducedNumber = number;
        var sum = 0;
        while (reducedNumber > 0) {
            var digit = reducedNumber % 10;
            reducedNumber = (reducedNumber - (reducedNumber % 10)) / 10;
            var digitPower = Math.pow(digit, numberOfDigitInNumber);
            sum = sum + digitPower;
        }
        return number === sum;
    }
    var z = 407;
    console.log("is " + z + " armstrong number = " + IsArmstrong(z));
})();


/* Exercise 13 - לכתוב קטע קוד שבודק האם מספר הוא מספר משוכלל
a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, 
the sum of its positive divisors excluding the number itself */

(function () {
    function PerfectNumber(num) {
        var i = 1;
        var sumOfDividers = 0;
        while (i < num) {
            if (num % i === 0) {
                sumOfDividers = sumOfDividers + i;
            }
            i++;
        }
        return num === sumOfDividers;
    }
    var z = 28;
    console.log("is " + z + " perfect number = " + PerfectNumber(z));
})();


/* Exercise 14 - .n לכתוב קטע קוד שמדפיס את סדרת פיבונאצ׳י עד למספר
called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
starting from 0 and 1 */
(function () {
    function FibonacciSequence(n) {
        var firstNum = 0;
        var secondNum = 1;
        var tempString = "0, 1";
        for (var i = 2; i < n; i++) {
            var nextNum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = nextNum;
            tempString = tempString + ", " + nextNum;
        }

        return tempString;
    }
    var z = 10;
    console.log("the fibonacci sequence of " + z + " is = " + FibonacciSequence(z));
})();