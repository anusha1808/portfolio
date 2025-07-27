import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Star, Trophy } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "NPTEL Introduction to Machine Learning",
      icon: Shield,
      issuer: "NPTEL (IIT Madras)",
      year: "2024",
      level: "Undergraduate-Level"
    },
    {
      name: "Prompt Design in Vertex AI",
      icon: Award,
      issuer: "Google Cloud",
      year: "2025",
      level: "Skill Badge"
    },
    {
      name: "Oracle Java Foundation Associate Certification",
      icon: Star,
      issuer: "Oracle",
      year: "2025",
      level: "Associate"
    },
    {
      name: "Oracle Generative AI Professional Certification",
      icon: Trophy,
      issuer: "Oracle",
      year: "2025",
      level: "Professional"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.name}
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-glow-primary transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {cert.issuer}
              </p>
              
              <div className="flex justify-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {cert.level}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {cert.year}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
