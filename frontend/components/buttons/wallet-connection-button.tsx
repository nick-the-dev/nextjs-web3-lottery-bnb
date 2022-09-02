import { Button } from "@mantine/core";
import { FC } from "react";
import { useWalletContext } from "../../context/wallet.context";

const WalletConnectionButton: FC = () => {
  const { disconnectWallet, connectWallet, wallet } = useWalletContext();

  return (
    <Button
      onClick={() => (wallet ? disconnectWallet() : connectWallet())}
      styles={(theme) => ({
        root: {
          backgroundColor: "#eec637",
          border: "4px solid #fff",
          height: 50,
          padding: 7,
          borderRadius: 24,
          fontSize: 20,
          width: 166,
          boxShadow: "0px 4px 9px 0px rgb(214 153 67 / 28%)",
          transition: "0.3s",

          "&:hover": {
            backgroundColor: "#ed9135",
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      {wallet ? "Disconnect" : "Wallet"}
    </Button>
  );
};

export default WalletConnectionButton;
