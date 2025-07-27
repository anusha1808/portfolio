import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      action: "anushagupta1808@gmail.com",
      href: "mailto:anushagupta1808@gmail.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect with me",
      href: "https://www.linkedin.com/in/anushagupta18/",
      color: "text-secondary"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      action: "Follow me",
      href: "https://github.com/anusha1808",
      color: "text-primary"
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="p-6 bg-glass backdrop-blur-md border-glass hover:shadow-glow-primary transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(method.href, '_blank')}
            >
              <div className="text-center">
                <div className={`inline-flex p-3 rounded-full bg-muted/50 ${method.color} group-hover:scale-110 transition-transform mb-4`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <p className="text-sm font-medium">{method.action}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="p-8 bg-glass backdrop-blur-md border-glass max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to start a conversation?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's build something amazing together.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
              asChild
            >
              <a href="mailto:john@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;