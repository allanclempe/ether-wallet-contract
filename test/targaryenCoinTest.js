var TargaryenCoin = artifacts.require("./contracts/TargaryenCoin.sol");
contract("TargaryenCoin", function(accounts) {
  var targaryenCoinContract;
  var owner = accounts[0];
  var productAddress = accounts[1];
  var anotherAccount = accounts[2];

  it("should have the correct total supply", function() {
    return TargaryenCoin.deployed()
      .then(function(instance) {
        targaryenCoinContract = instance;
        return targaryenCoinContract.totalSupply();
      })
      .then(function(totalSupply) {
        assert.equal(
          web3.utils.fromWei(totalSupply),
          100000000,
          "Total supply isn't correct"
        );
      });
  });

  it("should transfer coins between owners", function() {
    return TargaryenCoin.deployed()
      .then(function(instance) {
        targaryenCoinContract = instance;
        return targaryenCoinContract;
      })
      .then(function() {
        return targaryenCoinContract.transfer(
          anotherAccount,
          web3.utils.toWei("5")
        );
      })
      .then(function() {
        return targaryenCoinContract.balanceOf(anotherAccount);
      })
      .then(function(amount) {
        assert.equal(web3.utils.toWei("5"), amount, "invalid amount");
      });
  });
});
