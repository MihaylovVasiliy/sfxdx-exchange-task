import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import Layout from "./components/Layout/Layout";
import { APP_NAME, CHAINS, DEFAULT_CHAIN, PROJECTID } from "./constants/consts";

const { provider } = configureChains(CHAINS, [
  walletConnectProvider({ projectId: PROJECTID }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: PROJECTID,
    chains: CHAINS,
    version: "1",
    appName: APP_NAME,
  }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, CHAINS);

function App({ store }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <WagmiConfig client={wagmiClient}>
          <Layout />
        </WagmiConfig>

        <Web3Modal
          projectId={PROJECTID}
          ethereumClient={ethereumClient}
          defaultChain={DEFAULT_CHAIN}
        />
      </Provider>
    </>
  );
}

interface AppProps {
  store: Store;
}

export default App;
