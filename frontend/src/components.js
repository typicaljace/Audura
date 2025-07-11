import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Search, 
  Library, 
  Heart, 
  Plus, 
  Download, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2, 
  Mic2, 
  ListMusic, 
  Monitor, 
  User,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Clock,
  PlayCircle
} from 'lucide-react';

// Mock data for the Spotify clone
const mockData = {
  recentlyPlayed: [
    {
      id: 1,
      title: "Lofi Hip Hop",
      artist: "Chill Beats",
      image: "https://images.unsplash.com/photo-1653579657403-25b2695601d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyc3xlbnwwfHx8YmxhY2t8MTc1MjE2OTUwOXww&ixlib=rb-4.1.0&q=85",
      type: "playlist"
    },
    {
      id: 2,
      title: "Vinyl Classics",
      artist: "Retro Collection",
      image: "https://images.unsplash.com/photo-1653579656823-307797687591?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxhbGJ1bSUyMGNvdmVyc3xlbnwwfHx8YmxhY2t8MTc1MjE2OTUwOXww&ixlib=rb-4.1.0&q=85",
      type: "album"
    },
    {
      id: 3,
      title: "Studio Sessions",
      artist: "Live Recordings",
      image: "https://images.unsplash.com/photo-1656208131443-3add0b719096?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdHN8ZW58MHx8fGJsYWNrfDE3NTIxNTg5NTh8MA&ixlib=rb-4.1.0&q=85",
      type: "album"
    },
    {
      id: 4,
      title: "Electronic Vibes",
      artist: "DJ Collection",
      image: "https://images.unsplash.com/photo-1599458254908-edac30d93f6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMGFydGlzdHN8ZW58MHx8fGJsYWNrfDE3NTIxNTg5NTh8MA&ixlib=rb-4.1.0&q=85",
      type: "playlist"
    },
    {
      id: 5,
      title: "Acoustic Sessions",
      artist: "Indie Folk",
      image: "https://images.pexels.com/photos/2858481/pexels-photo-2858481.jpeg",
      type: "album"
    },
    {
      id: 6,
      title: "Jazz Lounge",
      artist: "Smooth Jazz",
      image: "https://images.pexels.com/photos/5550310/pexels-photo-5550310.jpeg",
      type: "playlist"
    }
  ],
  madeForYou: [
    {
      id: 7,
      title: "Discover Weekly",
      artist: "Your weekly mixtape of fresh music",
      image: "https://images.unsplash.com/photo-1653579656806-b290ca2efd83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxhbGJ1bSUyMGNvdmVyc3xlbnwwfHx8YmxhY2t8MTc1MjE2OTUwOXww&ixlib=rb-4.1.0&q=85",
      type: "playlist"
    },
    {
      id: 8,
      title: "Daily Mix 1",
      artist: "Your favorite songs with new discoveries",
      image: "https://images.unsplash.com/photo-1645388267365-16642b5c736f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGFydGlzdHN8ZW58MHx8fGJsYWNrfDE3NTIxNTg5NTh8MA&ixlib=rb-4.1.0&q=85",
      type: "playlist"
    },
    {
      id: 9,
      title: "Release Radar",
      artist: "Catch all the latest music from artists you follow",
      image: "https://images.pexels.com/photos/16547284/pexels-photo-16547284.jpeg",
      type: "playlist"
    },
    {
      id: 10,
      title: "On Repeat",
      artist: "Songs you can't stop playing",
      image: "https://images.pexels.com/photos/7605539/pexels-photo-7605539.jpeg",
      type: "playlist"
    },
    {
      id: 11,
      title: "Time Capsule",
      artist: "Nostalgic songs from your past",
      image: "https://images.pexels.com/photos/5949262/pexels-photo-5949262.jpeg",
      type: "playlist"
    },
    {
      id: 12,
      title: "Liked Songs",
      artist: "678 liked songs",
      image: "https://images.pexels.com/photos/5977664/pexels-photo-5977664.jpeg",
      type: "playlist"
    }
  ],
  playlists: [
    {
      id: 13,
      title: "My Playlist #1",
      artist: "Created by you",
      image: "https://images.unsplash.com/photo-1653579657403-25b2695601d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyc3xlbnwwfHx8YmxhY2t8MTc1MjE2OTUwOXww&ixlib=rb-4.1.0&q=85",
      songs: 23
    },
    {
      id: 14,
      title: "Chill Vibes",
      artist: "Created by you",
      image: "https://images.unsplash.com/photo-1653579656823-307797687591?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxhbGJ1bSUyMGNvdmVyc3xlbnwwfHx8YmxhY2t8MTc1MjE2OTUwOXww&ixlib=rb-4.1.0&q=85",
      songs: 45
    },
    {
      id: 15,
      title: "Workout Mix",
      artist: "Created by you",
      image: "https://images.unsplash.com/photo-1656208131443-3add0b719096?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdHN8ZW58MHx8fGJsYWNrfDE3NTIxNTg5NTh8MA&ixlib=rb-4.1.0&q=85",
      songs: 67
    }
  ],
  currentSong: {
    title: "Lofi Dreams",
    artist: "Chill Beats",
    image: "https://images.unsplash.com/photo-1653579657403-25b2695601d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyc3xlbnwwfHx8YmxhY2t8MTc1MjE2OTUwOXww&ixlib=rb-4.1.0&q=85",
    duration: "3:24",
    currentTime: "1:23"
  }
};

// Sidebar Component
export const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isLibraryExpanded, setIsLibraryExpanded] = useState(false);

  return (
    <div className="w-64 bg-black text-white h-full flex flex-col">
      {/* Main Navigation */}
      <div className="p-6">
        <div className="flex items-center mb-8">
          <img
           src="/assets/logo1.png" // Update this path to your actual logo location
           alt="Audura Logo"
           className="w-12 h-12 mr-3" // Adjust size as needed
          />
          <div className="text-2xl font-bold text-white">Audura
          </div>
        </div>

        
        
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveSection('home')}
            className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-800 transition-colors ${
              activeSection === 'home' ? 'bg-gray-800' : ''
            }`}
          >
            <Home size={24} />
            <span className="font-medium">Home</span>
          </button>
          
          <button 
            onClick={() => setActiveSection('search')}
            className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-800 transition-colors ${
              activeSection === 'search' ? 'bg-gray-800' : ''
            }`}
          >
            <Search size={24} />
            <span className="font-medium">Search</span>
          </button>
        </nav>
      </div>

      {/* Your Library */}
      <div className="flex-1 p-6 pt-0">
        <div className="mb-4">
          <button 
            onClick={() => setIsLibraryExpanded(!isLibraryExpanded)}
            className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Library size={24} />
              <span className="font-medium">Your Library</span>
            </div>
            <Plus size={20} />
          </button>
        </div>

        {/* Library Items */}
        <div className="space-y-2">
          {mockData.playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <img 
                src={playlist.image} 
                alt={playlist.title}
                className="w-10 h-10 rounded"
              />
              <div className="flex-1">
                <div className="text-sm font-medium">{playlist.title}</div>
                <div className="text-xs text-gray-400">{playlist.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Install App */}
      <div className="p-6 pt-0">
        <button className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <Download size={24} />
          <span className="font-medium">Install App</span>
        </button>
      </div>
    </div>
  );
};

// Main Content Area
export const MainContent = ({ activeSection }) => {
  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Content based on active section */}
      <div className="p-6">
        {activeSection === 'home' && <HomeContent />}
        {activeSection === 'search' && <SearchContent />}
        {activeSection === 'library' && <LibraryContent />}
      </div>
    </div>
  );
};

// Top Navigation Component
const TopNavigation = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
          Upgrade
        </button>
        <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
          <User size={16} />
        </button>
      </div>
    </div>
  );
};

// Home Content Component
const HomeContent = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="space-y-8">
      {/* Good Morning Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Good morning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockData.recentlyPlayed.map((item) => (
            <div 
              key={item.id}
              className="flex items-center bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden hover:bg-opacity-70 transition-colors cursor-pointer group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 p-4">
                <div className="font-medium">{item.title}</div>
              </div>
              {hoveredItem === item.id && (
                <div className="p-4">
                  <button className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center hover:bg-[#1ed760] transition-colors">
                    <Play size={20} className="text-black ml-1" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Made for You Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Made for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mockData.madeForYou.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
                {hoveredItem === item.id && (
                  <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center hover:bg-[#1ed760] transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play size={20} className="text-black ml-1" />
                  </button>
                )}
              </div>
              <div className="text-white font-medium mb-1">{item.title}</div>
              <div className="text-gray-400 text-sm">{item.artist}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Played */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recently played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mockData.recentlyPlayed.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full aspect-square object-cover rounded-lg shadow-lg"
                />
                {hoveredItem === item.id && (
                  <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center hover:bg-[#1ed760] transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play size={20} className="text-black ml-1" />
                  </button>
                )}
              </div>
              <div className="text-white font-medium mb-1">{item.title}</div>
              <div className="text-gray-400 text-sm">{item.artist}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Search Content Component
const SearchContent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const genres = [
    { name: 'Pop', color: 'bg-pink-500', image: mockData.madeForYou[0].image },
    { name: 'Hip-Hop', color: 'bg-orange-500', image: mockData.madeForYou[1].image },
    { name: 'Rock', color: 'bg-red-500', image: mockData.madeForYou[2].image },
    { name: 'Jazz', color: 'bg-blue-500', image: mockData.madeForYou[3].image },
    { name: 'Electronic', color: 'bg-purple-500', image: mockData.madeForYou[4].image },
    { name: 'Classical', color: 'bg-green-500', image: mockData.madeForYou[5].image },
    { name: 'Indie', color: 'bg-yellow-500', image: mockData.recentlyPlayed[0].image },
    { name: 'Country', color: 'bg-teal-500', image: mockData.recentlyPlayed[1].image },
  ];

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white text-black rounded-full focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
        />
      </div>

      {/* Browse All */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Browse all</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {genres.map((genre) => (
            <div 
              key={genre.name}
              className={`${genre.color} rounded-lg p-4 h-32 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
            >
              <h3 className="text-white font-bold text-lg mb-2">{genre.name}</h3>
              <img 
                src={genre.image} 
                alt={genre.name}
                className="absolute -bottom-2 -right-2 w-16 h-16 object-cover rounded-lg rotate-12"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Search results for "{searchTerm}"</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mockData.madeForYou.filter(item => 
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.artist.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded-lg shadow-lg"
                  />
                  <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center hover:bg-[#1ed760] transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play size={20} className="text-black ml-1" />
                  </button>
                </div>
                <div className="text-white font-medium mb-1">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.artist}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Library Content Component
const LibraryContent = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Library</h2>
        <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {mockData.playlists.map((playlist) => (
          <div 
            key={playlist.id}
            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group"
          >
            <img 
              src={playlist.image} 
              alt={playlist.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <div className="text-white font-medium">{playlist.title}</div>
              <div className="text-gray-400 text-sm">{playlist.artist}</div>
            </div>
            <button className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center hover:bg-[#1ed760] transition-all opacity-0 group-hover:opacity-100">
              <Play size={20} className="text-black ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Player Component
export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(40);

  return (
    <div className="bg-black border-t border-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Currently Playing */}
        <div className="flex items-center space-x-4 w-1/3">
          <img 
            src={mockData.currentSong.image} 
            alt={mockData.currentSong.title}
            className="w-14 h-14 object-cover rounded"
          />
          <div>
            <div className="text-white font-medium">{mockData.currentSong.title}</div>
            <div className="text-gray-400 text-sm">{mockData.currentSong.artist}</div>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <Heart size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 w-1/3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsShuffled(!isShuffled)}
              className={`p-2 rounded-full hover:bg-gray-800 transition-colors ${isShuffled ? 'text-[#1DB954]' : 'text-gray-400'}`}
            >
              <Shuffle size={16} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <SkipBack size={20} className="text-gray-400" />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              {isPlaying ? 
                <Pause size={20} className="text-black" /> : 
                <Play size={20} className="text-black ml-1" />
              }
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <SkipForward size={20} className="text-gray-400" />
            </button>
            <button 
              onClick={() => setIsRepeated(!isRepeated)}
              className={`p-2 rounded-full hover:bg-gray-800 transition-colors ${isRepeated ? 'text-[#1DB954]' : 'text-gray-400'}`}
            >
              <Repeat size={16} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-xs text-gray-400">{mockData.currentSong.currentTime}</span>
            <div className="flex-1 h-1 bg-gray-600 rounded-full">
              <div 
                className="h-1 bg-white rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <span className="text-xs text-gray-400">{mockData.currentSong.duration}</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center space-x-4 w-1/3 justify-end">
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <Mic2 size={16} className="text-gray-400" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ListMusic size={16} className="text-gray-400" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <Monitor size={16} className="text-gray-400" />
          </button>
          <div className="flex items-center space-x-2">
            <Volume2 size={16} className="text-gray-400" />
            <div className="w-20 h-1 bg-gray-600 rounded-full">
              <div 
                className="h-1 bg-white rounded-full relative"
                style={{ width: `${volume}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};