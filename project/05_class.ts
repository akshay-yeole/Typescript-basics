class Account {
    private static accountCount = 0;
    constructor(
        private balance: number,
        private AccountNumber: number,
        private Name: string
    ) {
        Account.accountCount++;
    }

    withDraw(amount: number) {
        this.balance -= amount;
        console.log(`Rs${amount} is Debited from your account`);
    }

    Deposit(amount: number) {
        this.balance += amount;
        console.log(`Rs${amount} is credited in your account`);
    }
    public static GetAccountsCount() {
        console.log(`Total accounts are :: ${Account.accountCount}`)
    }
}

Account.GetAccountsCount();

let acc1: Account = new Account(500, 12345, 'John');
let acc2 = new Account(1500, 6789, 'WEEK');

Account.GetAccountsCount();
