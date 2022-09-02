import { FC } from "react"
import Image from "next/image"
import Card from "../card"

import contractIcon from "../../public/assets/icon-contract.png"
import winIcon from "../../public/assets/icon-win.png"
import infoIcon from "../../public/assets/icon-info.png"

const Info: FC = () => {
  return (
    <section className="info" id="info">
      <h2 className="section-title">Info</h2>
      <div className="cards-wrapper">
        <Card>
          <div className="card-img-wrapper">
            <Image src={contractIcon} width="200" height="200" alt="Smart contract icon" />
          </div>
          <h3 className="card-title">Smart Contract</h3>
          <p className="card-desc">
            {
              "Guarantees and controls MAIN CONDITION. When all tickets are sold out a RANDOM ticket holder will WIN a prize. Everything is fair, fast, and transparent due to our smart contract. Pretty nice, isn't it?"
            }
          </p>
        </Card>
        <Card>
          <div className="card-img-wrapper">
            <Image src={winIcon} width="200" height="200" alt="How to win icon" />
          </div>
          <h3 className="card-title">How to win</h3>
          <p className="card-desc">
            {
              "As soon as all tickets are sold out, the luckiest ticket holder wins a prize. Smart Contract ensures that the winner will get it automatically. The more tickets you buy — the bigger your chance is. Don't wait for luck, it has already come along with the NFT Loottery!"
            }
          </p>
        </Card>
        <Card>
          <div className="card-img-wrapper">
            <Image src={infoIcon} width="200" height="200" alt="Our info icon" />
          </div>
          <h3 className="card-title">Our info</h3>
          <p className="card-desc">
            {
              "NFT Loottery is a unique opportunity to significantly increase your profits! Each Loottery NFT is a ticket to participate in our lotteries to win 100 MATIC, GOLD TICKET and some juicy prizes..."
            }
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Info
