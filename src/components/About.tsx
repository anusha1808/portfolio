import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for clean code and innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm an undergraduate software engineer passionate about crafting exceptional digital experiences. With a strong foundation in modern web technologies, I enjoy simplifying complex problems into clean, intuitive solutions.

            </p>
            <p className="text-lg leading-relaxed">
              Beyond academics, I actively explore new technologies, contribute to open-source projects, and dive into system design patterns. I strive to write code that’s not only functional, but also maintainable and scalable.
            </p>
            <p className="text-lg leading-relaxed">
              Currently focused on full-stack development with React, Node.js, and cloud services like AWS and Firebase. 
              Always eager to learn and collaborate on interesting projects.
            </p>
          </div>
          
          <Card className="p-8 bg-glass backdrop-blur-md border-glass hover:shadow-glow-primary transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Focus</span>
                <span className="font-medium">Full-Stack Development</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium">Undergraduate Student</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Learning</span>
                <span className="font-medium">AWS, DSA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Interests</span>
                <span className="font-medium">AI, Cloud Computing, Open Source
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;