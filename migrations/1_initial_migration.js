const Migrations = artifacts.require("Migrations");

module.exports = function(deployer, network, accounts) {
  console.log('Account to load with ETH: ', accounts[0]);
  deployer.deploy(Migrations);
};
