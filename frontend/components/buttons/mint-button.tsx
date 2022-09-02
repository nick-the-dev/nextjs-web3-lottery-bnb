import { Button } from "@mantine/core"
import { FC, useState } from "react"
import { useWalletContext } from "../../context/wallet.context"

const MintButton: FC = (props: any) => {
  const { disconnectWallet, connectWallet, wallet } = useWalletContext()
  const [isLoading, setIsLoading] = useState(false)
  const quantity = props.quantity
  const setQuantity = props.setQuantity

  const mint = (quantity: any) => {
    setIsLoading(true)
    props
      .handleMint(quantity)
      .then((res: any) => {
        setIsLoading(false)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  return (
    <Button
      loading={isLoading}
      onClick={() => (wallet ? mint(quantity) : connectWallet())}
      className="mint-button"
      styles={{
        root: {
          fontFamily: "Dosis",
          fontWeight: 500,
          border: "none",
          padding: 7,
          borderRadius: 24,
          fontSize: 25,
          width: "auto",
          minWidth: 255,
          boxShadow: "0px 4px 9px 0px rgba(69, 67, 214, 0.28)",
          transition: "0.3s",
          background: "none!important",
          position: "relative",
          height: 60,

          "&::before": {
            content: '""',
            borderRadius: 24,
            display: "block",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(100deg, #4543d6 -18%, #25e8d6 109%)",
            transition: "0.3s",
            zIndex: -1,
          },

          "&::after": {
            content: '""',
            borderRadius: 24,
            display: "block",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(to bottom, #7ba0ff 0%, #5bcca9 100%)",
            transition: "0.3s",
            opcaity: 0,
            zIndex: -2,
          },

          "&:hover::before": {
            opacity: 0,
          },

          "&:hover::after": {
            opacity: 1,
            background: "linear-gradient(to bottom, #7ba0ff 0%, #5bcca9 100%)",
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      }}
    >
      {wallet ? "Mint" : "Connect Wallet"}
    </Button>
  )
}

export default MintButton
