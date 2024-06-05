`#! /usr/bin/env node`
import inquirer from "inquirer";
console.log("WELCOME TO MEHAK KHAN ATM MACHINE");

let userBalance = Math.floor(Math.random() *10000);

let myLoop = true;

while(myLoop){

    let userInput = await inquirer.prompt([
        {
            type: `inPut`,
            name: `userPin`,
            message: `Enter your pin!`,
        },
        {
            type: `list`,
            name: `accountType`,
            message: `Select the account Type!`,
            choices: [`Current account`, `Saving Account`]
        },
        {
            type: `list`,
            name: `transactionType`,
            message: `Select the transaction Type!`,
            choices: [`Fast cash`, `Cash Withdraw`, `Balance Inquiry`]
        },
        {
            type: `list`,
            name: `amount`,
            message: `Select the amount you want to withdraw`,
            choices: [1000, 1500, 2000, 2500, 3000, 4000, 5000,6000],
        when(userInput){
        return userInput.transactionType === `Fast cash`
        }
    },
    {
        type: `number`,
        name: `amount`,
        message: `Enter amount you want to withdraw`,
  when(userInput){
    return userInput.transaction === `Cash Withdraw`
  }
    }]);
    const {userPin, transactionType, amount} = userInput
  
    if(userPin && transactionType === `Balance Inquiry`){
        console.log(`Your current balance is Rs.${userBalance}`);
    
    }else if(userPin){
    if(userBalance > amount){
console.log(`Your account has been debited with Rs.${amount} and your remaining balance is ${userBalance -= amount}`);}
else{
    console.log(`/nUnsufficient Balance`);
    
}
  }

  let moreTransaction = await inquirer.prompt([
    {
        type: `confirm`,
        name: `more`,
        message: `You want to more transaction?`,
        default: false,
    }]);
    
    if(!moreTransaction.more){
        myLoop = false,
        console.log(`/nTHANK YOU FOR USING MEHAK KHAN ATM MACHINE`);
  }
     }
