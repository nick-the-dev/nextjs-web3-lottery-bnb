import { FC } from "react"
import WalletConnectionButton from "../buttons/wallet-connection-button"

const Whitelist: FC = () => {
  return (
    <section className="whitelist" id="whitelist">
      <div className="whitelist-box">
        <h2>SIGN UP TO WHITELIST</h2>
        <h3>TO BE GUARANTEED A TICKET IN THE FUTURE RUFFLES</h3>
        <a className="btn signup-btn" href="#" target="_blank">
          Sign Up
        </a>
      </div>
    </section>
  )
}

export default Whitelist
