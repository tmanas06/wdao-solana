import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const WalletConnect: React.FC = () => {
  return (
    <div>
      {/* Solana Wallet Connect Button */}
      <WalletMultiButton />
    </div>
  );
};

export default WalletConnect;
