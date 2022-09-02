import { BigNumber } from "ethers"
import { parseEther } from "ethers/lib/utils"

const contractConstants: Readonly<{
  MyToken: {
    contractName: string
    tokenName: string
    tokenSymbol: string
    totalSupply: BigNumber
  }
  LotteryNFT: {
    contractName: string
    tokenName: string
    tokenSymbol: string
    totalSupply: BigNumber
  }
  Counter: {
    contractName: string
  }
}> = {
  MyToken: {
    totalSupply: parseEther("100"),
    contractName: "MyToken",
    tokenName: "MyToken",
    tokenSymbol: "MYTOK",
  },
  LotteryNFT: {
    totalSupply: parseEther("5"),
    contractName: "NFTLootteryTest",
    tokenName: "NLT",
    tokenSymbol: "NLT",
  },
  Counter: {
    contractName: "Counter",
  },
}

export default contractConstants
