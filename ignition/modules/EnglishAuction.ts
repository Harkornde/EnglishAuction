import {buildModule} from "@nomicfoundation/hardhat-ignition/modules"

const NFT_ADDRESS = "The Nft address";
const NFT_ID = 123;
const STARTING_BID = 200;

const AuctionModule = buildModule("AuctionModule", (m) => {
    const nftAddress = m.getParameter("nftAddress", NFT_ADDRESS);
    const nftId = m.getParameter("nftId", NFT_ID)
    const startingBid = m.getParameter("startingBid", STARTING_BID )

    const englishAuction = m.contract("EnglishAuction",[nftAddress,nftId,startingBid]);

    return {englishAuction};
})

export default AuctionModule;