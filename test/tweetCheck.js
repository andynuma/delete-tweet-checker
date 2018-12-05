const Checker = artifacts.require("../contracts/Checker.sol")

contract("Checker" ,function(accounts){

    beforeEach(async () => {
        checkerInstance = await Checker.deployed()
    })

    it("can get tweet" ,async() =>{
       await checkerInstance.getTweet("@example","hi , you are ****.",{from:accounts[0]})
       //const checkerInstance.tweets()
       const newGetTweet = await checkerInstance.tweets(accounts[0], 0)
       //bytes32で定義したuserIdはUTFに変換すること
       //変換しない場合：0x406578616d706c65000000000000000000000000000000000000000000000000'
       //が表示される
       const tweetContent1 = web3.toUtf8(newGetTweet[0])
       const tweetContent2 = newGetTweet[1]
    //    console.log(newGetTweet)
       assert.equal(tweetContent1, '@example', 'The content of the new added tweet is not correct')
       assert.equal(tweetContent2, 'hi , you are ****.', 'The content of the new added tweet is not correct')

    })


    it("show tweet" ,async() =>{

        await checkerInstance.getTweet("@example","hi , you are ****")
        const _tweetId = await 1;
        //const tx0 = await checkerInstance.getTweet("hi , you are ****.")
        //console.log(tx0)
        const tx =  await checkerInstance.showTweet(_tweetId)
        assert.isOk(tx)
     })

     it("show hex to UTF" ,async() =>{
        const myhex = "0x406578616d706c65000000000000000000000000000000000000000000000000"
        const result = web3.toUtf8(myhex)
        console.log(result)
     })

})