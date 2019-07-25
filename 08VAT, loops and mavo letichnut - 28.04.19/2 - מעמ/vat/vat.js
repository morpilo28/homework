"use strict";
var wallet = prompt("please enter your wallet amount");
wallet = Number(wallet);
if (Number.isNaN(wallet)) { //checking the input type
    console.log("not a number");
} else {
    console.log(typeof wallet);
}

var cellphonePrice = 849;
var cellphoneAccessoryPrice = 39;
var VAT = 17; //in percentages

var cellphonePriceWithVat = tax(cellphonePrice);
var cellphoneAccessoryPriceWithVat = tax(cellphoneAccessoryPrice);

var cellphonesBought = 0;
var cellphonesAccessoriesBought = 0;

var walletReduced = wallet; // i want to know how much did I spent

while (walletReduced >= Math.min(cellphonePriceWithVat, cellphoneAccessoryPriceWithVat)) {
    if (walletReduced >= cellphonePriceWithVat) {
        walletReduced = walletReduced - cellphonePriceWithVat;
        cellphonesBought++;
    } else {
        walletReduced = walletReduced - cellphoneAccessoryPriceWithVat;
        cellphonesAccessoriesBought++;
    }
}

function tax(originalPrice) {
    return (originalPrice + (originalPrice * VAT / 100));
}

function PrintPurchaseSum() {
    return ("You can purchase " + cellphonesBought + " smartphones and " + cellphonesAccessoriesBought + " smartphone accessories with total cost of " + (wallet - walletReduced).toFixed(2) + " NIS.");
}

var purchaseSum = PrintPurchaseSum();
console.log(purchaseSum);