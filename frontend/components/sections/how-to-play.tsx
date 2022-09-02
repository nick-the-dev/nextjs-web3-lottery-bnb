import { FC } from "react"
import Card from "../card"

const HowToPlay: FC = () => {
  return (
    <section className="how-to-play" id="how-to-play">
      <h2 className="section-title">How to play</h2>
      <div className="cards-wrapper">
        <Card>
          <div className="number">1</div>
          <h3 className="title">Buy NFT ticket</h3>
          <p className="desc">The price is only 2 MATIC.</p>
        </Card>
        <Card>
          <div className="number">2</div>
          <h3 className="title">Expectation</h3>
          <p className="desc">Wait until all 100 tickets are sold.</p>
        </Card>
        <Card>
          <div className="number">3</div>
          <h3 className="title">Result</h3>
          <p className="desc">
            As soon as the last ticket is bought, the smart contract will conduct a drawing via the Chainlink, and the
            lucky winner gets the money to his wallet.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default HowToPlay
