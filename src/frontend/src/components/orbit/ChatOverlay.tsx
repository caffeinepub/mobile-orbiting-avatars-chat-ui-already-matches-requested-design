import { useEffect, useState } from 'react';
import { X, Send } from 'lucide-react';
import { GlassPanel } from './GlassPanel';
import type { Friend } from './OrbitScreen';

interface ChatOverlayProps {
  friend: Friend;
  onClose: () => void;
}

export function ChatOverlay({ friend, onClose }: ChatOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Trigger animation after mount
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // In a real app, this would send the message
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'oklch(0.05 0 0 / 0.8)' }}
      onClick={handleClose}
    >
      <div
        className={`w-full max-w-md transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-80 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <GlassPanel className="border-2 border-accent neon-glow-cyan">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-accent/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent/50">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{friend.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {friend.status === 'online' ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-accent" />
            </button>
          </div>

          {/* Chat messages area */}
          <div className="p-4 h-64 overflow-y-auto">
            <div className="flex flex-col gap-3">
              <div className="text-center text-sm text-muted-foreground py-2">
                Start a conversation with {friend.name}
              </div>
              
              {/* Sample message */}
              <div className="flex justify-start">
                <div className="glass max-w-[70%] p-3 rounded-2xl rounded-tl-sm">
                  <p className="text-sm text-foreground">
                    Hey! Welcome to ORBIT 🚀
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    Just now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Message input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-accent/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full glass border border-accent/30 focus:border-accent focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 text-accent" />
              </button>
            </div>
          </form>
        </GlassPanel>
      </div>
    </div>
  );
}
