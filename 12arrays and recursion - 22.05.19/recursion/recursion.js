"use strict";

/* 1. Write a recursive function that computes the sum of all numbers from 1 to n,
 where n is given as parameter */
(function () {

    function sumAllNumbers(n) {
        if (n === 1) {
            return 1;
        }


        return n + sumAllNumbers(n - 1);
    }
    var x = 5;
    console.log("The sum of all number from 1 to " + x + " is = " + sumAllNumbers(x));
    
    var heading = document.getElementById('heading');
    heading.innerHTML += '<h1>' + "The sum of all number from 1 to " + x + " is = " + sumAllNumbers(x) + '</h1>';
})();


/* 4. Write a recursive function that finds and returns the minimum element in an array,
where the array and its size are given as parameters */
(function () {

    function minElementInArray(array, size) {

        if (size === 1) {
            return array[0];
        }

        return Math.min(array[size - 1], minElementInArray(array, size - 1));
    }
    var myArray = [100, 50, 30, 5, 8, 2];
    var sizeOfElement = 6;
    var sizeOfElement = Number(sizeOfElement);
    console.log("The minimum element in the array is = " + minElementInArray(myArray, sizeOfElement));

    var heading2 = document.getElementById('heading2');
    heading2.innerHTML += '<h2>' + "The minimum element in the array is = " + minElementInArray(myArray, sizeOfElement) + '</h2>';
})();

/* 7. Write a recursive function that computes and returns the sum of all elements in an array,
where the array and its size are given as parameters */
(function () {

    function sumOfAllElementsInArray(array, size) {
        if (size === 1) {
            return array[0];
        }

        return array[size - 1] + sumOfAllElementsInArray(array, size - 1);
    }
    var myArray = [1, 2, 3, 4, 5];
    var size = 5;
    console.log("The sum of all the elements in the array is = " + sumOfAllElementsInArray(myArray, size));

    var heading3 = document.getElementById('heading3');
    heading3.innerHTML += '<h3>' + "The sum of all the elements in the array is = " + sumOfAllElementsInArray(myArray, size) + '</h3>';
})();

/* 10. Write a recursive function that determines whether an array is a palindrome,
where the array and its size are given as parameters */
(function () {

    function isArrayPalindrome(array, size) {

        if (size === 0 || size === 1) {
            return true;
        }

        if (array[0] !== array[size - 1]) {
            return false;
        }
        return isArrayPalindrome(array.slice(1, size), size - 2);

    }
    var myArray = [3, 1, 0, 1, 3];
    var size = 5;
    console.log("Is the array " + myArray + " palindrome = " + isArrayPalindrome(myArray, size));

    var heading4 = document.getElementById('heading4');
    heading4.innerHTML += '<h4>' + 'Is the array ' + myArray + ' palindrome = ' + isArrayPalindrome(myArray, size) + '</h4>';
})();

/* 13. Write a recursive function that searches for a target in a sorted array using binary search,
where the array, its size and the target are given as parameters */
//need fixing!!!!!!!!!!!
(function () {
    
    function binarySearch(array, size, target) {
        var high = Math.floor(size);
        var low = 0;
        var mid = Math.floor((low + high) / 2);

        if (target === array[mid]) {
            return true + '. the target ' + target + ' is in the array';
        } else if (target < array[mid]) {
            return binarySearch(array, size / 2, target);
        } else if (target > array[mid]) {
            return binarySearch(array, size / 2, target);
        }
        return ('the target is not in the array');
    }

    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var size = 10;
    var target = 11; //4,5,7,8,9,10 - doesn't work
    console.log(binarySearch(myArray, size, target));

    var heading5 = document.getElementById('heading5');
    heading5.innerHTML += '<h5>' + binarySearch(myArray, size, target) + '</h5>';
})();