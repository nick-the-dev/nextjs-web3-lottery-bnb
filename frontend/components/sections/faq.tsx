import { FC, useEffect } from "react"
import Card from "../card"

function openFaqItem(e: any) {
  e.currentTarget.classList.toggle("open")
}

const Faq: FC = () => {
  return (
    <section className="faq" id="faq">
      <h2 className="section-title">FAQ</h2>
      <div className="faq-rows">
        <div className="faq-item" onClick={openFaqItem}>
          <div className="toggle-wrapper">
            <div className="toggle"></div>
          </div>
          <div className="text">
            <div className="question">What is NFT Loottery?</div>
            <div className="card-wrapper">
              <Card>
                <p className="answer">
                  NFT Loottery provides holders with unique opportunities to benefit from the global transition of
                  lottery business. NFT Loottery collection features 100 tokens, all randomly generated and equipped
                  with its own metadata.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="faq-item" onClick={openFaqItem}>
          <div className="toggle-wrapper">
            <div className="toggle"></div>
          </div>
          <div className="text">
            <div className="question">What does my NFT ticket do?</div>
            <div className="card-wrapper">
              <Card>
                <p className="answer">
                  Each NFT allows holders to play, invest, exchange and join the contest with high rewards! Each
                  Loottery NFT is 100% unique.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="faq-item" onClick={openFaqItem}>
          <div className="toggle-wrapper">
            <div className="toggle"></div>
          </div>
          <div className="text">
            <div className="question">How can I buy NFT ticket?</div>
            <div className="card-wrapper">
              <Card>
                <p className="answer">
                  You need MATIC (Polygon Network) to make a purchase, and you can buy it on many cryptocurrency
                  exchanges. You need to install the MetaMask plugin to buy Loottery NFT.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="faq-item" onClick={openFaqItem}>
          <div className="toggle-wrapper">
            <div className="toggle"></div>
          </div>
          <div className="text">
            <div className="question">How much does it cost?</div>
            <div className="card-wrapper">
              <Card>
                <p className="answer">Each ticket is worth 2 MATIC.</p>
              </Card>
            </div>
          </div>
        </div>
        <div className="faq-item" onClick={openFaqItem}>
          <div className="toggle-wrapper">
            <div className="toggle"></div>
          </div>
          <div className="text">
            <div className="question">How are NFT tickets generated?</div>
            <div className="card-wrapper">
              <Card>
                <p className="answer">
                  All NFTs are algorithmically-generated. We use Chainlink VRF as a source of randomness.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="faq-item" onClick={openFaqItem}>
          <div className="toggle-wrapper">
            <div className="toggle"></div>
          </div>
          <div className="text">
            <div className="question">How will the winner receive a prize?</div>
            <div className="card-wrapper">
              <Card>
                <p className="answer">
                  The winner’s ticket turns gold and 100 MATIC transfers to the winners’ wallet automatically.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="faq-item" onClick={openFaqItem}>
          <div className="toggle-wrapper">
            <div className="toggle"></div>
          </div>
          <div className="text">
            <div className="question">{"What if I don't win?"}</div>
            <div className="card-wrapper">
              <Card>
                <p className="answer">
                  {"If you can't win the first raffle, you'll have a chance to participate in all future ones!"}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
