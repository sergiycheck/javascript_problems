const fetch = require('node-fetch');

export const fetchOwnCollection = async () => {
  const OPENSEA_API = '06d950b41f624f36afd706279c5fc47c';
  // const WALLET_ADDRESS = '0x704CD00cbB8BF91038dFCF8bC008D065DDF1D8F8';
  const WALLET_ADDRESS = '0x7Fc3d60f1708456F4A7f9E2ad88242e00B15FA77';

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-API-KEY': OPENSEA_API,
    },
  };

  const urlAssets = 'https://api.opensea.io/api/v1/assets/';

  const responseAssets = await fetch(
    `${urlAssets}?${new URLSearchParams({
      owner: WALLET_ADDRESS,
      limit: '50',
      offset: '0',
    })}`,
    options
  );
  const resultAssets = await responseAssets.json();

  console.log('resultAssets');
  console.dir(resultAssets, { depth: null, colors: true });

  const collectionResponse = (await fetch(
    `https://api.opensea.io/api/v1/collections?asset_owner=${WALLET_ADDRESS}&offset=0&limit=50`,
    options
  ).then((response) => response.json())) as any[];

  console.dir(collectionResponse, { depth: null, colors: true });

  const collection = collectionResponse?.map((item) => ({
    details: item.description,
    slug: item.slug,
    name: item.name,
    contractAddress: item.primary_asset_contracts[0].address,
    owned: [],
  }));

  for (const iterator of collection) {
    const assetsResponse = (await fetch(
      `https://api.opensea.io/api/v1/assets?owner=${WALLET_ADDRESS}&asset_contract_address=${iterator.contractAddress}&include_orders=false`,
      options
    ).then((response) => response.json())) as { assets: any[] };

    iterator.owned = assetsResponse.assets
      .map((item) => ({
        name: item.name,
        img: item.image_url,
        id: item.token_id,
      }))
      .filter((item) => item.name && item.img);
  }

  return collection;
};
