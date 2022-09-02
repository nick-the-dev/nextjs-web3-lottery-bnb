import { Button } from "@mantine/core"
import { FC } from "react"
import { useWalletContext } from "../../context/wallet.context"

const WalletConnectionButton: FC = () => {
  const { disconnectWallet, connectWallet, wallet } = useWalletContext()

  return (
    <Button
      onClick={() => (wallet ? disconnectWallet() : connectWallet())}
      styles={(theme) => ({
        root: {
          backgroundColor: '#5273c8',
          border: '4px solid #fff',
          height: 50,
          padding: 7,
          borderRadius: 24,
          fontSize: 20,
          width: 166,
          boxShadow: '0px 4px 9px 0px rgba(69, 67, 214, 0.28)',
          transition: '0.3s',

          '&:hover': {
            backgroundColor: '#4543d6',
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      {wallet ? "Disconnect" : "Wallet"}
    </Button>
  )
}

export default WalletConnectionButton
