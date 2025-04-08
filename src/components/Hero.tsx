import React from "react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        <span className="text-gradient">Transform Your Ideas</span> Into Reality
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        We help businesses of all sizes build amazing digital products that stand out in today's competitive market.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="font-medium">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="font-medium">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
