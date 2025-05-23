import React, { useState, useEffect } from 'react';

interface SocialPost {
  id: string;
  platform: 'twitter' | 'telegram';
  author: string;
  handle: string;
  content: string;
  timestamp: Date;
  likes?: number;
  retweets?: number;
  avatar?: string;
}

const SocialFeed: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const mockPosts: SocialPost[] = [
    {
      id: '1',
      platform: 'twitter',
      author: 'FrogLord',
      handle: '@FrogLord420',
      content: 'Just aped into $RIBBIT 🐸 The Frogfather approves! #RibbitMafia',
      timestamp: new Date(Date.now() - 300000),
      likes: 42,
      retweets: 17
    },
    {
      id: '2',
      platform: 'telegram',
      author: 'DegenFrog',
      handle: '@DegenFrog',
      content: '🚀 $RIBBIT to the moon! The swamp is calling...',
      timestamp: new Date(Date.now() - 600000),
      likes: 23
    },
    {
      id: '3',
      platform: 'twitter',
      author: 'CryptoToad',
      handle: '@CryptoToad',
      content: 'The Frogfather has spoken. Time to hop in! 🐸💰 #RIBBIT',
      timestamp: new Date(Date.now() - 900000),
      likes: 89,
      retweets: 34
    },
    {
      id: '4',
      platform: 'telegram',
      author: 'SwampMaster',
      handle: '@SwampMaster',
      content: 'Phase 2 incoming! The inner circle is forming... 🕴️',
      timestamp: new Date(Date.now() - 1200000),
      likes: 56
    }
  ];

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1000);

    // Add new posts periodically
    const interval = setInterval(() => {
      const newPost: SocialPost = {
        id: Math.random().toString(),
        platform: Math.random() > 0.5 ? 'twitter' : 'telegram',
        author: ['FrogMaster', 'RibbitKing', 'SwampLord', 'ToadPrince'][Math.floor(Math.random() * 4)],
        handle: `@${['DegenFrog', 'MemeKing', 'CryptoToad', 'FrogLord'][Math.floor(Math.random() * 4)]}`,
        content: [
          '🐸 The Frogfather never forgets... #RibbitMafia',
          'Green candles incoming! $RIBBIT army assemble! 🚀',
          'Respecting the frog since day one 🎩',
          'The swamp is calling and I must hop! 🐸💚'
        ][Math.floor(Math.random() * 4)],
        timestamp: new Date(),
        likes: Math.floor(Math.random() * 100),
        retweets: Math.floor(Math.random() * 50)
      };

      setPosts(prev => [newPost, ...prev.slice(0, 9)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  if (isLoading) {
    return (
      <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-green-400 mb-4">🌐 Live Social Feed</h3>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-slate-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
        <span className="mr-2">🌐</span>
        Live Social Feed
        <div className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
      </h3>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {posts.map(post => (
          <div key={post.id} className="border-b border-slate-700 last:border-b-0 pb-4 last:pb-0">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {post.platform === 'twitter' ? '🐦' : '📱'}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-semibold text-slate-300">{post.author}</p>
                  <p className="text-xs text-slate-500">{post.handle}</p>
                  <span className="text-slate-500">·</span>
                  <p className="text-xs text-slate-500">{formatTime(post.timestamp)}</p>
                </div>
                <p className="text-sm text-slate-400 mt-1">{post.content}</p>
                {post.platform === 'twitter' && (
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-xs text-slate-500">
                      <span>❤️</span>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-slate-500">
                      <span>🔄</span>
                      <span>{post.retweets}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeed;