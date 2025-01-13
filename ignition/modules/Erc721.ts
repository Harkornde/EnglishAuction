import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

const Erc721 = buildModule("Erc721", (m) => {
    const erc721 = m.contract("ERC721");
    return { erc721 };
})

export default Erc721;