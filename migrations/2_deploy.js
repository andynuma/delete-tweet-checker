const Checker = artifacts.require("Checker");

module.exports = (deployer,accounts) =>{
    deployer.deploy(Checker);

};
