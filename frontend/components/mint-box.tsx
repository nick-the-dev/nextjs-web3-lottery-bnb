import { FC, useState } from "react"
import MintButton from "./buttons/mint-button"
import Quantity from "./quantity"

interface MintBoxProps {
  handleMint: any
}

const MintBox: FC<MintBoxProps> = (props: any) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="mint-box">
      <>
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <MintButton quantity={quantity} setQuantity={setQuantity} {...props} />
      </>
    </div>
  )
}

export default MintBox
