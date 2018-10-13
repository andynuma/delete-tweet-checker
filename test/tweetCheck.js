const Checker = artifacts.require("../contracts/Checker.sol")

contract("Checker" ,function(accounts){

    beforeEach(async () => {
        checkerInstance = await Checker.deployed()
    })

    it("can get tweet" ,async() =>{
       const tx =  await checkerInstance.getTweet("@example","hi , you are ****.")
       //const checkerInstance.tweets()
       assert.isOk(tx)
    })


    it("show tweet" ,async() =>{

        await checkerInstance.getTweet("@example","hi , you are ****")
        const _tweetId = await 1;
        //const tx0 = await checkerInstance.getTweet("hi , you are ****.")
        //console.log(tx0)


        const tx =  await checkerInstance.showTweet(_tweetId)
        assert.isOk(tx)
     })
})