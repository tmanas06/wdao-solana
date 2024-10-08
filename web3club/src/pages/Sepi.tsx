export const optimismSepoliaTestnet = {
    id: '11155420', // Replace with the actual chain ID for Optimism Sepolia
    name: 'Optimism Sepolia',
    network: 'optimismSepolia',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://11155420.rpc.thirdweb.com/'], // Replace with the actual RPC URL
    blockExplorers: {
      default: { name: 'Block Explorer Name', url: 'https://your-block-explorer.com' }, // Optional: Replace with actual block explorer details
    },
    testnet: true,
  };

  