import { Code2, Palette, PenTool } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
      features: [
        'Custom Website Development',
        'E-Commerce Solutions',
        'Web Application Development',
        'API Integration',
        'Performance Optimization',
      ],
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visual designs that capture attention and communicate your brand message.',
      features: [
        'Brand Identity Design',
        'Logo Design',
        'Social Media Graphics',
        'Marketing Materials',
        'UI/UX Design',
      ],
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Compelling, SEO-optimized content that engages your audience and drives conversions.',
      features: [
        'Blog Posts & Articles',
        'SEO Content Writing',
        'Copywriting',
        'Technical Writing',
        'Social Media Content',
      ],
    },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254111461415?text=Hello%20Kaiga!%20I%20would%20like%20to%20discuss%20your%20services.', '_blank');
  };

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <p className="text-accent text-lg font-semibold uppercase tracking-wider mb-4">
            Services
          </p>
          <h2 className="text-gradient-green mb-6">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive creative and professional services tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="card-hover p-8 bg-card border-2 hover:border-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your project? Let's discuss how I can help bring your vision to life.
          </p>
          <Button size="lg" className="btn-secondary" onClick={handleWhatsAppClick}>
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
