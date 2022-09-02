import { FC, useState } from "react"
import React from "react"
import ProgressBar from "@ramonak/react-progress-bar"

interface MintProgressBarProps {
  maxSupply: any
  totalSupply: any
}

const MintProgressBar: FC<MintProgressBarProps> = (props: any) => {
  const mintedQuantity = props.totalSupply //Here I will read supply from smart contract
  const totalQuantity = props.maxSupply //Maybe pull this value from smart contract also
  const ticketsLeft = totalQuantity - mintedQuantity

  return (
    <div className="progress-bar-wrapper">
      <ProgressBar
        completed={mintedQuantity}
        bgColor="#7ca1ff"
        height="40px"
        baseBgColor="#f3f3f3"
        animateOnRender
        maxCompleted={totalQuantity}
        isLabelVisible={false}
      />
      <span className="text">
        {ticketsLeft} tickets left out of {totalQuantity}
      </span>
    </div>
  )
}

export default MintProgressBar
