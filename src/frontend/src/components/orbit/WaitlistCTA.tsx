import { useState } from 'react';
import { Rocket } from 'lucide-react';

export function WaitlistCTA() {
  const [isHovered, setIsHovered] = useState(false);

  const handleJoinWaitlist = () => {
    window.open('https://forms.gle/nD95mzMCvfRbBFZV7', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-md px-4 pb-safe">
      <button
        onClick={handleJoinWaitlist}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 animate-pulse-glow"
        style={{
          background: 'linear-gradient(135deg, oklch(var(--primary)), oklch(var(--secondary)))',
          color: 'oklch(var(--primary-foreground))',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <span className="flex items-center justify-center gap-2">
          <Rocket className="w-5 h-5" />
          Join the Waitlist
        </span>
      </button>
      
      {/* Footer attribution */}
      <div className="mt-6 text-center text-xs text-muted-foreground">
        <p>
          Built with ❤️ using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'orbit-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()} ORBIT</p>
      </div>
    </div>
  );
}
