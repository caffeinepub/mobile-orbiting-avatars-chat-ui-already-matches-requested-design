import { useState } from 'react';
import { Starfield } from './Starfield';
import { OrbitAvatars } from './OrbitAvatars';
import { ChatOverlay } from './ChatOverlay';
import { WaitlistCTA } from './WaitlistCTA';

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
}

const FRIENDS: Friend[] = [
  { id: '1', name: 'Nova', avatar: '/assets/generated/orbit-friend-1.dim_512x512.png', status: 'online' },
  { id: '2', name: 'Zephyr', avatar: '/assets/generated/orbit-friend-2.dim_512x512.png', status: 'online' },
  { id: '3', name: 'Lyra', avatar: '/assets/generated/orbit-friend-3.dim_512x512.png', status: 'offline' },
  { id: '4', name: 'Orion', avatar: '/assets/generated/orbit-friend-4.dim_512x512.png', status: 'online' },
  { id: '5', name: 'Stella', avatar: '/assets/generated/orbit-friend-5.dim_512x512.png', status: 'online' },
];

export function OrbitScreen() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleFriendClick = (friend: Friend) => {
    setSelectedFriend(friend);
  };

  const handleCloseChat = () => {
    setSelectedFriend(null);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Starfield background */}
      <Starfield />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 py-8">
        {/* Header */}
        <header className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-center tracking-wider" style={{
            background: 'linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px oklch(var(--primary) / 0.3)'
          }}>
            ORBIT
          </h1>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Your cosmic social network
          </p>
        </header>

        {/* Orbit avatars - centered */}
        <div className="flex-1 flex items-center justify-center w-full">
          <OrbitAvatars friends={FRIENDS} onFriendClick={handleFriendClick} />
        </div>

        {/* Waitlist CTA */}
        <WaitlistCTA />
      </div>

      {/* Chat overlay */}
      {selectedFriend && (
        <ChatOverlay friend={selectedFriend} onClose={handleCloseChat} />
      )}
    </div>
  );
}
