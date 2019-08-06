var TargaryenCoin = artifacts.require("./TargaryenCoin.sol");

module.exports = function(deployer, network, accounts) {
  console.log(accounts);
  deployer.deploy(TargaryenCoin);
};
