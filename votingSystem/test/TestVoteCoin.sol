// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/VoteCoin.sol";

contract TestVoteCoin {

  function testInitialBalanceUsingDeployedContract() public {
    VoteCoin vote = VoteCoin(DeployedAddresses.VoteCoin());

    uint expected = 1;

    Assert.equal(vote.getBalance(tx.origin), expected, "Owner should have 1 VoteCoin initially");
  }

  function testInitialBalanceWithNewVoteCoin() public {
    VoteCoin vote = new VoteCoin();

    uint expected = 1;

    Assert.equal(vote.getBalance(tx.origin), expected, "Owner should have 1 VoteCoin initially");
  }

}
