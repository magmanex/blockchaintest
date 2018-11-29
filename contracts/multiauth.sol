pragma solidity ^0.4.18;
//pragma experimental ABIEncoderV2;
contract SimpleContract {

    uint balance;
    
    constructor() public { // caleed since it deploy to blockchain
        balance = 1000;
    }
    
    function setBalance(uint newBalance) public {
        balance = newBalance;
    }
    
    function getBalance() public view returns (uint) {
        return balance;
    }
    // string Topic = "which one you like";
    // uint chc1;
    // uint chc2;
    
    // constructor() public { // caleed since it deploy to blockchain
    //     chc1 = 0;
    //     chc2 = 0;
    // }
    
    // function setChc1() public returns (uint){
    //     return ++chc1;
    // }

    // function setChc2() public {
    //     chc2++;
    // }
    
    // function getBalance() public view returns (uint , uint) {
    //     return (chc1,chc2);
    // }

    // Post[] public posts;
    // Comments[] public comments;

    // struct Comments{
    //     address myAddress;
    //     string message;
    // }
    
    // struct Post{
    //     address myAddress;
    //     string topic;
    //     string message;
    //     int like;
    //     uint[] commentPointer;
    // }
    

    // function addPost(address _myAddress, string _topic ,  string _message , int _like) public returns(uint rowNumber) {
    //     Post memory newEntity;
    //     newEntity.myAddress = _myAddress;
    //     newEntity.topic = _topic;
    //     newEntity.message = _message;
    //     newEntity.like = _like;
    //     posts.push(newEntity);
    //     return posts.length;
    // }
    
    // function addComment(address _address, uint _post ,  string _message ) public returns(uint rowNumber)  {
    //     Comments memory newComment;
    //     newComment.message = _message;
    //     newComment.myAddress = _address;
    //     comments.push(newComment);
    //     posts[_post].commentPointer.push(comments.length);
    //     newComment.message = _message;
    //     return comments.length;
    // }
    
    // function getPosts(uint pos) public constant returns (address , string , string , int) {
    //     return (posts[pos].myAddress , posts[pos].topic , posts[pos].message , posts[pos].like);
    // }

    // // function getComments(uint num) public view returns (string) {
    // //     return comments[0].message;
    // // }
    
    // function test() public view returns (address dd) {
    //     return posts[0].myAddress;
    // }    
}