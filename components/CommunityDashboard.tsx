import React from 'react';
import Section from './Section';
import PriceTracker from './PriceTracker';
import SocialFeed from './SocialFeed';
import CommunityCounter from './CommunityCounter';
import MemeGallery from './MemeGallery';

const CommunityDashboard: React.FC = () => {
  return (
    <Section 
      id="community-dashboard" 
      title="Community Dashboard" 
      titleEmoji="📊" 
      className="bg-slate-900/50"
      animationType="fade-in"
      delay={100}
    >
      <div className="space-y-8">
        {/* Price Tracker */}
        <div className="w-full">
          <PriceTracker />
        </div>

        {/* Community Stats */}
        <div className="w-full">
          <CommunityCounter />
        </div>

        {/* Social Feed and Meme Gallery Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <SocialFeed />
          </div>
          <div>
            <MemeGallery />
          </div>
        </div>
      </div>

      {/* Community Call to Action */}
      <div className="mt-12 text-center bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-8 border border-green-500/20">
        <h3 className="text-2xl font-bold text-green-400 mb-4">Join the Ribbit Mafia Family!</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Connect with fellow frogs, share your best memes, and stay updated on the latest $RIBBIT developments. 
          The swamp is stronger together! 🐸💚
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://t.me/ribbitfrogfather" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <span className="mr-2">📱</span>
            Join Telegram
          </a>
          <a 
            href="https://x.com/ribbitfrogfather" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <span className="mr-2">🐦</span>
            Follow on X
          </a>
        </div>
      </div>
    </Section>
  );
};

export default CommunityDashboard;