import { useWeb3Modal } from "@web3modal/react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useNetwork } from "wagmi";
import { DEFAULT_CHAIN } from "../../../constants/consts";
import { userSelector } from "../../../redux/user/reducers";
import { UserType } from "../../../redux/user/types";
import { Button } from "../Button";

const ConnectButton = () => {
  const { open, isOpen } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const userShortWalletName = useMemo(
    () => user.wallet?.slice(0, 9) + "..." + user.wallet?.slice(-4),
    [user]
  );

  const onConnectButtonClick = async () => {
    await open();
  };

  useEffect(() => {
    dispatch({
      type: "user/SET_USER",
      payload: {
        wallet: address,
        userType: UserType.user,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (isConnected && chain?.name !== DEFAULT_CHAIN.name) {
      alert("Please, select Goerli network");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain]);

  return (
    <Button
      onClick={onConnectButtonClick}
      disabled={isOpen}
      buttonSize="large"
      type="primary"
      hasImg={isConnected}
    >
      {isConnected ? (
        <>
          <div>
            <img src={"assets/icons/metamask.svg"} alt="Metamask icon" />
          </div>
          <span>{userShortWalletName}</span>
          <div>
            <img src={"assets/icons/disconnect.svg"} alt="Disconnect icon" />
          </div>
        </>
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
};

export default ConnectButton;
