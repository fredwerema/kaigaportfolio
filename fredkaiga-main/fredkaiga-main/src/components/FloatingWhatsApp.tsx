import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/254111461415?text=Hello%20Kaiga!%20I%20would%20like%20to%20discuss%20a%20project.', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl bg-accent hover:bg-gold-dark text-accent-foreground z-50 animate-bounce hover:animate-none transition-all hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default FloatingWhatsApp;
