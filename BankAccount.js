
class BankAccount {
    constructor(intRate, balance){
        this.intRate = intRate
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        if(this.balance < amount){
            this.balance -= (amount + 5)
            console.log('Insufficient Funds: Changing a $5 fee.')
        }
        else{
            this.balance -= amount
        }
    }

    displayAccountInfo(){
        console.log(`Balance: ${this.balance}`)
        console.log(`Interest Rate: ${this.intRate}`)
    }

    yeildInt(){
        if(this.balance > 0){
            this.interest = this.balance * this.intRate
            console.log(`Interest Amount: ${this.interest}`)
        }
        else{
            console.log('Cannot calculate interest at this time.')
        }    
    }
}

const acct1 = new BankAccount(.05, 2000)
const acct2 = new BankAccount(.07, 5000)

acct1.deposit(200)
acct1.displayAccountInfo()
acct1.withdraw(2300)
acct1.displayAccountInfo()

acct2.yeildInt()



