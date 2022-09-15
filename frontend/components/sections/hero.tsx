import { FC } from "react";
import MintBox from "../mint-box";
import MintProgressBar from "../mint-progress-bar";
import Image from "next/image";

interface HeroProps {
  maxSupply: any;
  totalSupply: any;
  handleMint: any;
}

const Hero: FC<HeroProps> = (props: any) => {
  return (
    <section className="hero" id="hero">
      <div className="left">
        <>
          <span className="slogan">Catch the winning spirit!</span>
          <div className="title-wrapper">
            <h1 className="title">NFT Lottery</h1>
          </div>
          <h2 className="subtitle">
            {
              "Limited offer: don't miss the opportunity to easily win 1 BNB (~300$)"
            }
          </h2>{" "}
          {/* Maybe pull here updated price of 1ETH */}
          <MintProgressBar
            maxSupply={props.maxSupply}
            totalSupply={props.totalSupply}
          />
          {console.log(props)}
          <div className="buy-ticket-wrapper">
            <h3 className="buy-ticket-title">Buy your win ticket</h3>
            <MintBox handleMint={props.handleMint} />
          </div>
        </>
      </div>
      <div className="right">
        <Image
          src="/assets/hero-ticket.jpg"
          width={283}
          height={552}
          alt="Lottery Ticket"
        />
      </div>
    </section>
  );
};

export default Hero;
