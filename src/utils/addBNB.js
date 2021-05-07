async function addBNB(library, activate, injected) {
  await library.jsonRpcFetchFunc('wallet_addEthereumChain', [
    {
      chainId: '0x38',
      chainName: 'Smart Chain',
      nativeCurrency: {
        name: 'Bincance',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com'],
    },
  ]);

  activate(injected);
}

export default addBNB;
