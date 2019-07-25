/* 1. needs to add:
    * checking of validation date
    * algorithm Luhn to the Tz.
2. put each class on different file and connect between them
3. go over the code and see if there are any problems */
"use strict";
var Address = /** @class */ (function () {
    function Address(City, Street, HomeNumber, Zipcode) {
        this.City = City;
        this.Street = Street;
        this.HomeNumber = HomeNumber;
        this.Zipcode = Zipcode;
    }
    Address.prototype.print = function () {
        return "City: " + this.City + " <br>\n        Street: " + this.Street + " <br>\n        Home Number: " + this.HomeNumber + " <br>\n        Zip code: " + this.Zipcode;
    };
    return Address;
}());
var Shop = /** @class */ (function () {
    function Shop(TypeOfMerchandise, NumOfProductsInStock, SquareMeter, Address) {
        this.TypeOfMerchandise = TypeOfMerchandise;
        this.NumOfProductsInStock = NumOfProductsInStock;
        this.SquareMeter = SquareMeter;
        this.Address = Address;
    }
    Shop.prototype.print = function () {
        return "<b> TypeOfMerchandise: </b> " + this.TypeOfMerchandise + " <br>\n        <b> NumOfProductsInStock: </b> " + this.NumOfProductsInStock + " <br> \n        <b> SquareMeter: </b> " + this.SquareMeter + " <br>\n        <b> Address: </b> <br> " + this.Address.print();
    };
    Shop.prototype.isBiggerThan500SquareMeter = function () {
        var isBigger = (this.SquareMeter > 500) ? "the store is considered as big" : "the store isn't considered as big";
        return isBigger;
    };
    return Shop;
}());
var Manager = /** @class */ (function () {
    function Manager(FirstName, LastName, Tz, MonthlySalary, Address) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Tz = Tz;
        this.MonthlySalary = MonthlySalary;
        this.Address = Address;
    }
    Manager.prototype.print = function () {
        return "<b> FirstName: </b> " + this.FirstName + " <br>\n        <b> LastName: </b> " + this.LastName + " <br> \n        <b> Tz: </b> " + this.Tz + " <br>\n        <b> MonthlySalary: </b> " + this.MonthlySalary + " <br>\n        <b> Address: </b> <br> " + this.Address.print();
    };
    Manager.prototype.FullName = function () {
        return this.FirstName + " " + this.LastName;
    };
    return Manager;
}());
var Customer = /** @class */ (function () {
    function Customer(FirstName, LastName, CreditCard) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.CreditCard = CreditCard;
    }
    Customer.prototype.print = function () {
        return "<b> FirstName: </b> " + this.FirstName + " <br>\n        <b> LastName: </b> " + this.LastName + " <br>\n        <b> CreditCard: </b> <br> " + this.CreditCard.print();
    };
    Customer.prototype.FullName = function () {
        return this.FirstName + " " + this.LastName;
    };
    return Customer;
}());
var CreditCard = /** @class */ (function () {
    function CreditCard(TypeOfCreditCard, NumOfCreditCard, DateOfCreditCard, Cvv) {
        this.TypeOfCreditCard = TypeOfCreditCard;
        this.NumOfCreditCard = NumOfCreditCard;
        this.DateOfCreditCard = DateOfCreditCard;
        this.Cvv = Cvv;
    }
    CreditCard.prototype.print = function () {
        return "TypeOfCreditCard: " + this.TypeOfCreditCard + " <br>\n        NumOfCreditCard: " + this.NumOfCreditCard + " <br>\n        DateOfCreditCard: " + this.DateOfCreditCard + " <br>\n        Cvv: " + this.Cvv;
    };
    return CreditCard;
}());
function main() {
    var address = new Address('lod', 'abba eban', 10, 90358);
    var shop = new Shop('food', 20, 600, address);
    var manager = new Manager('mor', 'pilo', 356759856, 3000, address);
    var creditCard = new CreditCard('visa', 6894563434, '03/2020', 599);
    var customer = new Customer('michal', 'harel', creditCard);
    var printTo = document.getElementById('print');
    printTo.innerHTML = "<u> address </u> <br> " + address.print() + " <br> <br>\n    <u> shop </u> <br>  " + shop.print() + " <br> <br>\n    <u> manager </u> <br>  " + manager.print() + " <br> <br>\n    <u> creditCard </u> <br> " + creditCard.print() + " <br> <br>\n    <u> customer </u> <br> " + customer.print() + " <br> <br>\n    " + customer.FullName() + " <br> <br>";
}
main();
