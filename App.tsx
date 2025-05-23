
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyItWorks from './components/WhyItWorks';
import TokenStory from './components/TokenStory';
import RiseOfMafia from './components/RiseOfMafia';
import Prophecy from './components/Prophecy';
import Mission from './components/Mission';
import MarketingHooks from './components/MarketingHooks';
import VisualsBranding from './components/VisualsBranding';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import CommunityDashboard from './components/CommunityDashboard';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import { NavItem } from './types';

const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Community", href: "#community-dashboard" },
  { name: "Story", href: "#token-story" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Mission", href: "#mission" },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navItems={navItems} />
      <main className="flex-grow">
        <Hero />
        <CommunityDashboard />
        <WhyItWorks />
        <TokenStory />
        <RiseOfMafia />
        <Prophecy />
        <Mission />
        <MarketingHooks />
        <VisualsBranding />
        <Tokenomics />
        <Roadmap />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
