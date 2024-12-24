// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface IERC721 {
    function transferFrom(address _from, address _to, uint _nftId) external;
}

contract EnglishAuction{
    event Started();
    event Bids(address _bidder, uint _highestBid);
    event Withdrawal(address indexed _bidder, uint _amount);
    event End(address _address, uint _amount);

    address payable public immutable seller;
    
    IERC721 public immutable nft;
    uint public immutable nftId;

    address public highestBidder;
    uint public highestBid;
    mapping (address => uint) bids;

    uint32 public  endAt;
    bool public started;
    bool public ended;

    constructor(address _nft, uint _nftId, uint _startingBid){
        seller = payable (msg.sender);
        nftId = _nftId;
        nft = IERC721(_nft);
        highestBid = _startingBid;
    }

    function start() external{
        require(msg.sender == seller);
        require(!started, "Started");
        started = true;
        endAt = uint32(block.timestamp + 60);
        nft.transferFrom(seller, address(this), nftId);

        emit Started();
    }

    
}