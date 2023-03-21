import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';

const moralis_api_key =
  'SaiwLdFTq9jY10ebaOvfxhxKBoAhBPbGEdSX4kTonHqYHiYGQkngsvdXK8hx20Sf';

export const getNftsFromDdress = async () => {
  await Moralis.start({
    apiKey: moralis_api_key,
  });

  // const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
  const address = '0x7Fc3d60f1708456F4A7f9E2ad88242e00B15FA77';

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });

  console.dir(response, { depth: null, colors: true });
};
