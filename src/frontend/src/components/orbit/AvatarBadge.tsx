import { useState } from 'react';

interface AvatarBadgeProps {
  src: string;
  alt: string;
  size?: 'medium' | 'large';
  status?: 'online' | 'offline';
  className?: string;
}

export function AvatarBadge({ src, alt, size = 'medium', status, className = '' }: AvatarBadgeProps) {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  const getInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className={`w-full h-full rounded-full overflow-hidden border-2 border-primary/50 ${className}`}>
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30 text-foreground font-bold">
            {getInitials(alt)}
          </div>
        )}
      </div>
      
      {/* Status indicator */}
      {status && (
        <div
          className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background ${
            status === 'online' ? 'bg-green-500' : 'bg-gray-500'
          }`}
        />
      )}
    </div>
  );
}
