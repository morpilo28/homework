/* 1. needs to add: 
    * checking of validation date 
2. put each class on different file and connect between them
3. go over the code and see if there are any problems */

"use strict";

class Address {
    public City: string;
    public Street: string;
    public HomeNumber: number;
    public Zipcode: number;

    constructor(City: string, Street: string, HomeNumber: number, Zipcode: number) {
        this.City = City;
        this.Street = Street;
        this.HomeNumber = HomeNumber;
        this.Zipcode = Zipcode;
    }

    public print(): string {
        return `City: ${this.City} <br>
        Street: ${this.Street} <br>
        Home Number: ${this.HomeNumber} <br>
        Zip code: ${this.Zipcode}`;
    }
}

class Shop {
    public TypeOfMerchandise: string;
    public NumOfProductsInStock: number;
    public SquareMeter: number;
    public Address: Address;

    constructor(TypeOfMerchandise: string, NumOfProductsInStock: number, SquareMeter: number, Address: Address) {
        this.TypeOfMerchandise = TypeOfMerchandise;
        this.NumOfProductsInStock = NumOfProductsInStock;
        this.SquareMeter = SquareMeter;
        this.Address = Address;
    }

    public print(): string {
        return `<b> TypeOfMerchandise: </b> ${this.TypeOfMerchandise} <br>
        <b> NumOfProductsInStock: </b> ${this.NumOfProductsInStock} <br> 
        <b> SquareMeter: </b> ${this.SquareMeter} <br>
        <b> Address: </b> <br> ${this.Address.print()}`;
    }

    public isBiggerThan500SquareMeter(): string {
        let isBigger = (this.SquareMeter > 500) ? "the store is considered as big" : "the store isn't considered as big";
        return isBigger;
    }
}

class Manager {
    public FirstName: string;
    public LastName: string;
    private Tz: number;
    public MonthlySalary: number;
    public Address: Address;

    constructor(FirstName: string, LastName: string, Tz: number, MonthlySalary: number, Address: Address) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Tz = Tz;
        this.MonthlySalary = MonthlySalary;
        this.Address = Address;
    }

    public print(): string {
        return `<b> FirstName: </b> ${this.FirstName} <br>
        <b> LastName: </b> ${this.LastName} <br> 
        <b> Tz: </b> ${this.Tz} <br>
        <b> MonthlySalary: </b> ${this.MonthlySalary} <br>
        <b> Address: </b> <br> ${this.Address.print()}`;
    }

    public FullName(): string {
        return `${this.FirstName} ${this.LastName}`;
    }
}

class Customer {
    public FirstName: string;
    public LastName: string;
    private CreditCard: CreditCard;

    constructor(FirstName: string, LastName: string, CreditCard: CreditCard) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.CreditCard = CreditCard;
    }

    public print(): string {
        return `<b> FirstName: </b> ${this.FirstName} <br>
        <b> LastName: </b> ${this.LastName} <br>
        <b> CreditCard: </b> <br> ${this.CreditCard.print()}`;
    }

    public FullName(): string {
        return `${this.FirstName} ${this.LastName}`;
    }

}

class CreditCard {
    private TypeOfCreditCard: string;
    private NumOfCreditCard: string;
    private expirationDate: string;
    private Cvv: number;

    constructor(TypeOfCreditCard: string, NumOfCreditCard: string, expirationDate: string, Cvv: number) {
        this.TypeOfCreditCard = TypeOfCreditCard;
        this.NumOfCreditCard = NumOfCreditCard;
        this.expirationDate = expirationDate;
        this.Cvv = Cvv;
    }

    public print(): string {
        return `TypeOfCreditCard: ${this.TypeOfCreditCard} <br>
        NumOfCreditCard: ${this.validCreditCard(this.NumOfCreditCard)} <br>
        DateOfCreditCard: ${this.isExpired(this.expirationDate)} <br>
        Cvv: ${this.Cvv}`;
    }

    public validCreditCard(value: string): string {
        // The Luhn Algorithm
        let nCheck = 0, bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
            if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
            nCheck += nDigit;
            bEven = !bEven;
        }

        if((nCheck % 10) == 0){
            return value;
        }else{
            return 'number of credit card is not valid';
        }
    }

    public isExpired(inputExpirationDate:string):string{
     return inputExpirationDate;
    }
}

function main() {
    let address = new Address('lod', 'abba eban', 10, 90358);
    let shop = new Shop('food', 20, 600, address);
    let manager = new Manager('mor', 'pilo', 356759856, 3000, address);
    let creditCard = new CreditCard('visa', '050500505', '03/2020', 599);
    let customer = new Customer('michal', 'harel', creditCard);

    let printTo = <HTMLInputElement>document.getElementById('print');
    printTo.innerHTML = `<u> address </u> <br> ${address.print()} <br> <br>
    <u> shop </u> <br>  ${shop.print()} <br> <br>
    <u> manager </u> <br>  ${manager.print()} <br> <br>
    <u> creditCard </u> <br> ${creditCard.print()} <br> <br>
    <u> customer </u> <br> ${customer.print()} <br> <br>`;
}
main();
