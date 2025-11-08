import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import kaigaPortrait from '@/assets/kaiga-portrait.jpg';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254111461415?text=Hello%20Kaiga!%20I%20would%20like%20to%20discuss%20a%20project.', '_blank');
  };

  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="slide-up space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-lg font-semibold uppercase tracking-wider">
                Welcome to my portfolio
              </p>
              <h1 className="text-gradient-green leading-tight">
                Hi, I'm <span className="text-gradient-gold">Kaiga</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                A multidisciplinary creative professional specializing in{' '}
                <span className="text-primary font-semibold">Web Development</span>,{' '}
                <span className="text-primary font-semibold">Graphic Design</span>, and{' '}
                <span className="text-primary font-semibold">Content Writing</span>
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I craft exceptional digital experiences that merge creativity with strategy,
                helping businesses and individuals bring their vision to life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-primary group"
                onClick={scrollToPortfolio}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary group border-2"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact via WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold">2+</div>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold">50+</div>
                <p className="text-sm text-muted-foreground mt-1">Projects Done</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold">100+</div>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="zoom-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={kaigaPortrait}
                alt="Kaiga - Professional Portrait"
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full object-cover shadow-2xl border-4 border-accent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
