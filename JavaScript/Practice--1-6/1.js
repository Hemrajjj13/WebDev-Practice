const bankAccount = {
    deposit: 0,
    withdraw: 0,
    checkBalance: 0,
    lastDeposit: 0,
    lastWithdraw: 0
}

function addBalance(addBal) {
    if (addBal < 0) {
        console.warn("invalid amount !!");
    } else {
        bankAccount.lastDeposit = 0;
        bankAccount.lastDeposit += addBal;
        bankAccount.checkBalance += addBal;
        console.log(`Deposit of ${addBal} Successful `)
    }
    console.log("Available Balance:", bankAccount.checkBalance);
}

function withdraw(amount) {
    if (amount < 0) {
        console.log("invalid amount");
    } else {
        bankAccount.lastWithdraw = 0;
        if (amount > bankAccount.checkBalance) {
            console.warn("Insufficient Amount");
        } else {
            bankAccount.lastWithdraw += amount;
            bankAccount.checkBalance -= amount;
            console.log(`Withdrawl of ${amount} suucessful`);
        }
    }
    console.log("Available Balance:", bankAccount.checkBalance);
}
