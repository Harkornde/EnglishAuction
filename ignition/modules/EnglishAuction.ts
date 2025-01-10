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

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI: bigint = 1_000_000_000n;

// const LockModule = buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });

// export default LockModule;
