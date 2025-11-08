import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Corporate Website Redesign',
      category: 'Web Development',
      description: 'Modern, responsive website built with React and Tailwind CSS for a leading tech company.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Tailwind', 'TypeScript'],
      link: '#',
      github: '#',
    },
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Branding', 'Logo Design', 'UI/UX'],
      link: '#',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Campaign',
      category: 'Graphic Design',
      description: 'Visual assets and social media graphics for a successful product launch campaign.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['Social Media', 'Marketing', 'Design'],
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <p className="text-accent text-lg font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h2 className="text-gradient-green mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of my recent work across web development, design, and content creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover overflow-hidden group bg-card border-2 hover:border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.link && (
                    <Button size="icon" variant="secondary" className="shadow-lg">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  )}
                  {project.github && (
                    <Button size="icon" variant="secondary" className="shadow-lg">
                      <Github className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
