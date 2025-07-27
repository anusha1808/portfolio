import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "React Router", "Next.js"],
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Firebase", "Express.js"],
      color: "text-secondary"
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      skills: ["Firebase Hosting", "Vercel", "AWS (Basics)"],
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "Vite", "VS Code", "Figma"],
      color: "text-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-glow-primary transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-full bg-muted/50 ${category.color} group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mt-4">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-muted/50 hover:bg-primary/60 hover:text-primary-foreground hover:shadow-glow-primary transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="outline" className="border-primary/50 text-primary">Currently Learning: AWS (EC2, S3, Lambda, etc.)</Badge>
            <Badge variant="outline" className="border-secondary/50 text-secondary">Exploring: Docker Basics</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;