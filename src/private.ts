class BankAccount {
    constructor(private balance: number) {}

    deposit( amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance
    }
    
}

const myMomAccount = new BankAccount(5000000)
myMomAccount.deposit(111223223)

console.log(myMomAccount.getBalance())