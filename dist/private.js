"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
const myMomAccount = new BankAccount(5000000);
myMomAccount.deposit(111223223);
console.log(myMomAccount.getBalance());
//# sourceMappingURL=private.js.map