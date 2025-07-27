import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const projects = [
    {
      title: "Urban Civic – Smart Municipal Complaint Management System",
      description: "Urban Civic is a TypeScript-powered web application designed to streamline civic issue reporting and resolution. It enables residents to easily log and track municipal problems such as garbage dumps, water leakages, streetlight outages, and road maintenance issues. Built with a focus on usability and efficiency, the platform ensures better transparency and faster redressal through role-based dashboards for citizens, administrators, and municipal workers.",
      tech: [
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "Vite",
        "React Router"
      ],
      github: "https://github.com/anusha1808/urban-civic-1",
      live: "https://urban-fix-a0b1b.web.app/",
      featured: true,
      category: ["Full Stack"]
    },
    {
      title: "Heart Disease Prediction App",
      description: "Developed a web application that predicts the risk of heart disease using a machine learning model trained on real-world medical data. The model takes user inputs like age, cholesterol level, and blood pressure, and outputs the likelihood of heart disease. Integrated the model into a user-friendly website using Flask, enabling real-time predictions through form submissions.",
      tech: ["Python", "Scikit-learn", "Flask", "React", "HTML", "CSS", "Vercel"],
      github: "https://github.com/anusha1808/Heart-Disease-Prediction-Model",
      live: "/DemoVideoHeartDiseasePrediction.mp4",
      featured: true,
      category: ["Frontend", "Backend"]
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => 
      Array.isArray(project.category)
        ? project.category.includes(selectedFilter)
        : project.category === selectedFilter
    );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-glass backdrop-blur-md border-glass rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className={`${
                  selectedFilter === category 
                    ? "bg-primary text-primary-foreground shadow-glow-primary" 
                    : "hover:bg-primary/10"
                } transition-all duration-300`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-8 bg-glass backdrop-blur-md border-glass hover:shadow-glow-primary transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge className="bg-gradient-primary">Featured</Badge>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-muted/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-glass bg-glass backdrop-blur-md hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-primary hover:shadow-glow-primary"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button 
            variant="outline" 
            className="border-glass bg-glass backdrop-blur-md hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;