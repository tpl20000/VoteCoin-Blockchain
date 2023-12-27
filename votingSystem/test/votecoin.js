const VoteCoin = artifacts.require("VoteCoin");

contract('VoteCoin', (accounts) => {

  it('should attempt to give 1 VoteCoin to the first account', async () => {

    const voteCointInstance = await VoteCoin.deployed();
    const balance = await voteCointInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 1, "First voter does not have 1 votecoins");

  });

  it('should try to transfer 1 VoteCoin from first account to the second', async () => {

    const voteCoinInstance = await VoteCoin.deployed();

    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    const accountOneStartingBalance = (await metaCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await metaCoinInstance.getBalance.call(accountTwo)).toNumber();

    const amount = 1;
    await voteCoinInstance.sendCoint(accountTwo, amount, { from: accountOne });

    const accountOneEndingBalance = (await metaCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await metaCoinInstance.getBalance.call(accountTwo)).toNumber();

    assert.equal(accountOneStartingBalance, accountOneEndingBalance - amount, "Transaction failure! (accountOne:sendFailed)");
    assert.equal(accountSecondStartingBalance, accountSecondEndingBalance - amount, "Transaction failure! (accountTwo:receiveFailed)");

  });

  
  // it('should send coin correctly', async () => {
  //   const metaCoinInstance = await MetaCoin.deployed();

  //   // Setup 2 accounts.
  //   const accountOne = accounts[0];
  //   const accountTwo = accounts[1];

  //   // Get initial balances of first and second account.
  //   const accountOneStartingBalance = (await metaCoinInstance.getBalance.call(accountOne)).toNumber();
  //   const accountTwoStartingBalance = (await metaCoinInstance.getBalance.call(accountTwo)).toNumber();

  //   // Make transaction from first account to second.
  //   const amount = 1;
  //   await metaCoinInstance.sendCoin(accountTwo, amount, { from: accountOne });

  //   // Get balances of first and second account after the transactions.
  //   const accountOneEndingBalance = (await metaCoinInstance.getBalance.call(accountOne)).toNumber();
  //   const accountTwoEndingBalance = (await metaCoinInstance.getBalance.call(accountTwo)).toNumber();

  //   assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
  //   assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  // });
});