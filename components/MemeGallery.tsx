import React, { useState, useEffect } from 'react';

interface Meme {
  id: string;
  title: string;
  imageUrl: string;
  author: string;
  likes: number;
  uploadDate: Date;
  featured: boolean;
}

const MemeGallery: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const mockMemes: Meme[] = [
    {
      id: '1',
      title: 'Frogfather Fedora',
      imageUrl: 'https://picsum.photos/seed/frog1/300/300',
      author: 'SwampLord',
      likes: 234,
      uploadDate: new Date(Date.now() - 3600000),
      featured: true
    },
    {
      id: '2', 
      title: 'Green Candles Rising',
      imageUrl: 'https://picsum.photos/seed/frog2/300/300',
      author: 'CryptoToad',
      likes: 189,
      uploadDate: new Date(Date.now() - 7200000),
      featured: false
    },
    {
      id: '3',
      title: 'RIBBIT Army',
      imageUrl: 'https://picsum.photos/seed/frog3/300/300', 
      author: 'MemeKing',
      likes: 456,
      uploadDate: new Date(Date.now() - 10800000),
      featured: true
    },
    {
      id: '4',
      title: 'Solana Swamp',
      imageUrl: 'https://picsum.photos/seed/frog4/300/300',
      author: 'DegenFrog',
      likes: 123,
      uploadDate: new Date(Date.now() - 14400000),
      featured: false
    }
  ];

  useEffect(() => {
    setMemes(mockMemes);
  }, []);

  const handleUpload = () => {
    setIsUploading(true);
    
    setTimeout(() => {
      const newMeme: Meme = {
        id: Date.now().toString(),
        title: ['Epic Frog Moment', 'Diamond Hands Frog', 'Moon Bound Ribbit'][Math.floor(Math.random() * 3)],
        imageUrl: `https://picsum.photos/seed/new${Date.now()}/300/300`,
        author: 'You',
        likes: Math.floor(Math.random() * 50),
        uploadDate: new Date(),
        featured: false
      };
      
      setMemes(prev => [newMeme, ...prev]);
      setIsUploading(false);
    }, 2000);
  };

  const filteredMemes = filter === 'featured' ? memes.filter(m => m.featured) : memes;

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-green-400">🎨 Community Memes</h3>
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          {isUploading ? '📤 Uploading...' : '➕ Upload Meme'}
        </button>
      </div>

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded text-sm ${
            filter === 'all' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          All ({memes.length})
        </button>
        <button
          onClick={() => setFilter('featured')}
          className={`px-3 py-1 rounded text-sm ${
            filter === 'featured' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          Featured ({memes.filter(m => m.featured).length})
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMemes.map(meme => (
          <div key={meme.id} className="group relative bg-slate-700 rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <img 
              src={meme.imageUrl}
              alt={meme.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3">
              <h4 className="font-semibold text-sm text-white truncate">{meme.title}</h4>
              <p className="text-xs text-slate-400 truncate">by {meme.author}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-slate-500">{meme.likes} ❤️</span>
                {meme.featured && <span className="text-yellow-400 text-xs">⭐ Featured</span>}
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeGallery;