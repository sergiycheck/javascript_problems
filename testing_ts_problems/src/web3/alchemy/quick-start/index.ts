// Setup
import { Network, Alchemy, AlchemySubscription } from 'alchemy-sdk';

const settings = {
  apiKey: 'z4Oz261kI857lWrKzOATuh3XccJ9F4-Z',
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export async function getLatestBlock() {
  // Get the latest block
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log(latestBlock);
}

export async function getNfts() {
  //0xshah.eth
  //0x994b342dd87fc825f66e51ffa3ef71ad818b6893
  // 0x7Fc3d60f1708456F4A7f9E2ad88242e00B15FA77
  // Get all the NFTs owned by an address
  const nfts = await alchemy.nft.getNftsForOwner('0xshah.eth');

  console.dir(nfts, { depth: null, colors: true });
}

export async function getTokenBalances() {
  // Get all outbound transfers for a provided address
  alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);
}

export async function listenToTransactions() {
  // Listen to all new pending transactions
  alchemy.ws.on(
    {
      method: AlchemySubscription.MINED_TRANSACTIONS,
      addresses: [{ from: '0x994b342dd87fc825f66e51ffa3ef71ad818b6893' }],
    },
    (res) => console.log(res)
  );
}

export async function getInfoFromAlchemyQuickStart() {
  getNfts();
}
