"use strict";
{
    // Getter and Setter in TypeScript
    /**
     * In TypeScript, **getters** and **setters** are special methods used to access and modify the properties of a class.
     * They provide an **encapsulated** way to get or set values, allowing you to control how data is accessed and modified.
     * Getters allow you to retrieve values, and setters allow you to modify them.
     */
    class BangAccount {
        // Constructor initializes the class properties
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
            console.log(` Account created for ${name} with ID: ${id} and balance: ${_balance}`);
        }
        // Getter for accessing the balance
        get balance() {
            console.log(` Current balance for ${this.name} is: ${this._balance}`);
            return this._balance; // Return the balance
        }
        // Setter for depositing money into the account
        set diposite(amount) {
            if (amount > 0) {
                this._balance += amount; // Update balance with deposit
                console.log(` ${amount} deposited successfully. New balance: ${this._balance}`);
            }
            else {
                console.log(` Cannot deposit a negative or zero amount.`);
            }
        }
    }
    // Creating an instance of BangAccount
    const person = new BangAccount(11, "Mazumder", 200);
    // Accessing the balance using the getter
    person.balance; //  Current balance for Mazumder is: 200
    // Depositing money using the setter
    person.diposite = 500; // 500 deposited successfully. New balance: 700
    // Checking the updated balance using the getter again
    person.balance; //  Current balance for Mazumder is: 700
    // Trying to deposit an invalid amount
    person.diposite = -100; //  Cannot deposit a negative or zero amount.
}
