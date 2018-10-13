pragma solidity ^0.4.20;

contract Checker{

    struct Tweet{
        bytes32 userId;
        string text;
    }

    // user can save 200 tweet
    uint256 public constant maxAmountOfTweet = 200;

    // Owner => Tweet
    mapping(address => Tweet[maxAmountOfTweet]) public tweets;

	// Owner => last tweet id
    mapping(address => uint256) public lastIds;

    //save Tweet
    function getTweet(bytes32 _userId, string _tweet) public {
        //make Tweet
        Tweet memory mytweet = Tweet(_userId, _tweet);
        //save Tweet  to tweets[]
        //lastIds[msg.sender]番目にmytweetを格納する，
        tweets[msg.sender][lastIds[msg.sender]] = mytweet;

        if(lastIds[msg.sender] >= maxAmountOfTweet) lastIds[msg.sender] = 0;
		else lastIds[msg.sender]++;
    }

    // show saved tweet
    function showTweet(uint _id) public view returns(bytes32, string){  
        bytes32 userId = tweets[msg.sender][_id].userId;
        string memory result = tweets[msg.sender][_id].text;
        return (userId, result);
    }
}