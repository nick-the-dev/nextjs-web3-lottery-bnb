import { ethers } from "hardhat"
//@ts-ignore // the objects here are created by typechain
import { Counter__factory, Counter } from "../../frontend/types/typechain"
import contractConstants from "../../frontend/constants/contractConstants"

async function main() {
  console.log(`\n[${contractConstants.Counter.contractName} Contract]`)
  const factory = (await ethers.getContractFactory(contractConstants.Counter.contractName)) as Counter__factory

  let contract = (await factory.deploy()) as Counter
  console.log(`\tDeploying... (tx: ${contract.deployTransaction.hash})`)
  await contract.deployed()

  // remove last line
  process.stdout.moveCursor(0, -1)
  process.stdout.clearLine(1)
  console.log(`\tContract is deployed at ${contract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
