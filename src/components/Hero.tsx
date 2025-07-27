import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Anusha Gupta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Software Engineering Student
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            Building elegant solutions with clean code. Passionate about modern web technologies 
            and creating user experiences that matter.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12 animate-slide-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
            onClick={() => scrollToSection('about')}
          >
            Get to know me
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-glass bg-glass backdrop-blur-md hover:bg-primary/10 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Let's connect
          </Button>

          <Button 
            variant="outline" 
            size="lg"
            className="border-glass bg-glass backdrop-blur-md hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a 
              href="/Anusha_Gupta_Resume.pdf"
              download
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Resume
            </a>
          </Button>

        </div>
        
        <div className="flex justify-center gap-6 animate-slide-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/anusha1808" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass hover:bg-primary/20 hover:shadow-glow-primary transition-all duration-300 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://www.linkedin.com/in/anushagupta18/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass hover:bg-primary/20 hover:shadow-glow-primary transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:anushagupta1808@gmail.com"
            className="p-3 rounded-full bg-glass backdrop-blur-md border border-glass hover:bg-primary/20 hover:shadow-glow-primary transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;