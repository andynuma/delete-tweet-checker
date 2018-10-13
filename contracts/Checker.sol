pragma solidity ^0.4.20;

contract Checker{

    struct Tweet{
        bytes32 id;
        string text;
    }

    uint latestTweetId = 0;

    Tweet[] public tweets;

    // tweetId => Tweet
    mapping(uint => Tweet) idToTweet;

    function getTweet(bytes32 _userid, string _tweet) public {
        Tweet memory mytweet = Tweet(_userid,_tweet);
        uint id = tweets.push(mytweet) - 1;
        idToTweet[id] = mytweet;
        latestTweetId++;
    }

    function showTweet(uint _id) public view returns(string){  
        return tweets[_id].text;
    }
}