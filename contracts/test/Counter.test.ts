import { ethers } from "hardhat"
import chai, { should } from "chai"
import chaiAsPromised from "chai-as-promised"
//@ts-ignore // the objects here are created by typechain
import { Counter__factory, Counter } from "../../frontend/types/typechain"
import { BigNumber, ContractReceipt, Signer } from "ethers"
import contractConstants from "../../frontend/constants/contractConstants"
import { Result } from "ethers/lib/utils"

chai.use(chaiAsPromised)
const { expect } = chai

const expectEvent = (receipt: ContractReceipt, name: string, checkArgs?: (r: Result) => boolean) => {
  if (receipt.events) {
    // there should be one event related to us here
    expect(
      receipt.events.some((e) => {
        // should have the event name
        expect(e.event).to.eq(name)
        // if it has arguments, it must pass our check function
        if (e.args) {
          expect(checkArgs).to.be.not.undefined
          expect(checkArgs!(e.args)).to.eq(true)
        }
        return true
      })
    ).to.be.true
  } else {
    expect.fail("No events found in this receipt!")
  }
}

describe(contractConstants.Counter.contractName, () => {
  let counterContract: Counter
  let owner: Signer
  let signers: Signer[]

  beforeEach(async () => {
    ;[owner, ...signers] = await ethers.getSigners()

    const counterFactory = (await ethers.getContractFactory(
      contractConstants.Counter.contractName,
      owner
    )) as Counter__factory
    counterContract = await counterFactory.deploy()
    await counterContract.deployed()
  })

  describe("deployment", async () => {
    expect(await counterContract.getCount()).to.eq(0)
    expect(counterContract.address).to.properAddress
  })

  describe("count up", async () => {
    it("should count up", async () => {
      const tx = await counterContract.countUp()
      expectEvent(await tx.wait(), "CountedTo", (r) => BigNumber.from(1).eq(r.number))

      let count = await counterContract.getCount()
      expect(count).to.eq(1)
    })
  })

  describe("count down", async () => {
    it("should count down", async () => {
      await counterContract.countUp()

      const tx = await counterContract.countDown()
      expectEvent(await tx.wait(), "CountedTo", (r) => BigNumber.from(0).eq(r.number))

      const count = await counterContract.getCount()
      expect(count).to.eq(0)
    })
  })

  it("should fail due to underflow exception", () => {
    return expect(counterContract.countDown()).to.eventually.be.rejectedWith(
      Error,
      "VM Exception while processing transaction: reverted with panic code 0x11 (Arithmetic operation underflowed or overflowed outside of an unchecked block)"
    )
  })
})
