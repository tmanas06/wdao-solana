import React, { useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import Home from './pages/Home';
import Blog from './pages/Blog';
import EventsCalendar from './pages/EventsCalendar';
import ProjectShowcase from './pages/ProjectShowcase';
import News from './pages/News';
import MintNFT from './pages/MintNFT';
import AboutUs from './pages/AboutUs';
import Digiboard from './pages/Digiboard';
import NavigationBar from './components/NavigationBar';
import StressTest from './pages/Stresstest';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for Solana wallet modal
import './App.css'; // Import your CSS file
import './index.css'; // Import global CSS

const App: React.FC = () => {
  // Set up Solana connection and wallet adapters
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []); // Change 'devnet' to 'mainnet-beta' for mainnet

  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    // Add other wallets if needed
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <div>
              <NavigationBar />
              <div className="page-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/events-calendar" element={<EventsCalendar />} />
                  <Route path="/project-showcase" element={<ProjectShowcase />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/mint-nft" element={<MintNFT />} />
                  <Route path="/reviews" element={<AboutUs />} />
                  <Route path="/digiboard" element={<Digiboard />} />
                  <Route path="/stress-test" element={<StressTest />} />
                </Routes>
              </div>
            </div>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
