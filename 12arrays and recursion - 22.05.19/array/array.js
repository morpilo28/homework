"use strict";

// 1 - a function that checks what is the maximum number in the input array
(function () {
    function maxNumberInArray(inputArray) {
        var maxNumber = 0;
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i] > maxNumber) {
                maxNumber = inputArray[i];
            } else {
                continue;
            }
        }
        return maxNumber;
    }

    var myArray = [0, 2, 12, 11, 10, 20, 3, 50, 6, 51];
    console.log("The max number in the array is = " + maxNumberInArray(myArray));
})();


// 2 - a function that checks if the input number exist in the input array
(function () {
    function isNumInArray(inputArray, num) {
        for (var i = 0; i < inputArray.length; i++) {
            if (num === inputArray[i]) {
                return true;
            }
        }
        return false;
    }

    var myArray = [1, 13, 15, 20, 5];
    var number = 5;
    console.log("Is num " + number + " exist in the array = " + isNumInArray(myArray, number));
})();


/* 3 - a function that checks if the input number is equal to the sum of two consecutive numbers
in the input array. and returns the indexer of the first num out of the two */
(function () {
    function isNumEqualToTwoConsecutiveNumbersInArray(inputArray, num) {
        for (var i = 0; i < inputArray.length; i++) {
            if ((inputArray[i] + inputArray[i + 1]) === num) {
                return ("The location of the first number out of the two consecutive numbers is = " + i);
            }
        }
        return ("There aren't two consecutive numbers that their sum equals the input number");
    }

    var myArray = [1, 14, 16, 0, 5];
    var number = 15;
    console.log(isNumEqualToTwoConsecutiveNumbersInArray(myArray, number));
})();


// 4 - a function that gets two sorted arrays and returns a merged array of the two
(function () {
    function mergedArrays(inputArray1, inputArray2) {
        var mergedArray = [];
        var i = 0;
        var j = 0;
        var z = 0;
        while (i < inputArray1.length && j < inputArray2.length) {
            if (inputArray1[i] !== inputArray2[j]) {
                if (inputArray1[i] < inputArray2[j]) {
                    mergedArray[z] = inputArray1[i];
                    i++;
                    z++;
                } else {
                    mergedArray[z] = inputArray2[j];
                    j++;
                    z++;
                }
            } else {
                mergedArray[z] = array1[i];
                i++;
                j++;
                z++;
            }
        }
        while (i < inputArray1.length) {
            mergedArray[z++] = inputArray1[i++];
        }
        while (j < inputArray2.length) {
            mergedArray[z++] = inputArray2[j++];
        }

        return mergedArray;
    }

    var array1 = [1, 3, 4, 6, 8, 10];
    var array2 = [1, 2, 3, 4, 5, 9, 11, 15];
    console.log("The merged array is = " + mergedArrays(array1, array2));
})();

