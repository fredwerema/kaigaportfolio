import { Award, BookOpen, Briefcase, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Law Student',
      description: 'Pursuing excellence in legal studies with a focus on corporate and intellectual property law',
    },
    {
      icon: Briefcase,
      title: 'Web Developer',
      description: 'Building modern, responsive websites and applications using cutting-edge technologies',
    },
    {
      icon: Award,
      title: 'Graphic Designer',
      description: 'Creating stunning visual identities and brand experiences that resonate',
    },
    {
      icon: Heart,
      title: 'Content Writer',
      description: 'Crafting compelling narratives and engaging content that drives results',
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <p className="text-accent text-lg font-semibold uppercase tracking-wider mb-4">
            About Me
          </p>
          <h2 className="text-gradient-green mb-6">
            Multi-Talented Creative Professional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about blending creativity with technical expertise to deliver exceptional results.
            With a diverse skill set spanning technology, design, and writing, I bring a unique
            perspective to every project I undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="card-hover p-6 bg-card border-2 hover:border-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center slide-up">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Beyond my professional pursuits, I'm committed to continuous learning and staying ahead
            of industry trends. I believe in the power of collaboration and always strive to exceed
            expectations. Let's work together to turn your vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
