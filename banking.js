// Task 1: Function to handle deposits
function deposit(account, amount) {
    account.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${account.balance}`);
}

// Task 2: Function to handle withdrawals
function withdraw(account, amount) {
    if (amount <= account.balance) {
        account.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${account.balance}`);
    } else {
        console.log("Insufficient balance.");
    }
}

// Task 3: Function to check balance
function checkBalance(account) {
    console.log(`Current Balance: ${account.balance}`);
}

// Example usage:
let userAccount = {
    balance: 1000 // Initial balance
};

deposit(userAccount, 500); // Depositing 500
withdraw(userAccount, 200); // Withdrawing 200
checkBalance(userAccount); // Checking balance
