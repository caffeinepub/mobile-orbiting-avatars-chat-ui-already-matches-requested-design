import { AvatarBadge } from './AvatarBadge';
import type { Friend } from './OrbitScreen';

interface OrbitAvatarsProps {
  friends: Friend[];
  onFriendClick: (friend: Friend) => void;
}

export function OrbitAvatars({ friends, onFriendClick }: OrbitAvatarsProps) {
  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
      {/* Central user avatar */}
      <div className="absolute z-20">
        <AvatarBadge
          src="/assets/generated/orbit-user-avatar.dim_512x512.png"
          alt="You"
          size="large"
          className="neon-glow-purple"
        />
      </div>

      {/* Orbiting friend avatars */}
      <div className="absolute inset-0 flex items-center justify-center">
        {friends.map((friend, index) => {
          const delay = (index * 4); // Stagger the animations
          
          return (
            <div
              key={friend.id}
              className="absolute cursor-pointer transition-transform hover:scale-110"
              style={{
                animation: `orbit 20s linear infinite`,
                animationDelay: `-${delay}s`,
              }}
              onClick={() => onFriendClick(friend)}
            >
              <AvatarBadge
                src={friend.avatar}
                alt={friend.name}
                size="medium"
                status={friend.status}
                className="neon-glow-blue"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
