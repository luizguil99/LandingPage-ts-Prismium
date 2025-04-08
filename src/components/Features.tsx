import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Code, BarChart, Zap } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb size={24} />,
      title: "Innovative Solutions",
      description: "We create cutting-edge solutions tailored to your specific business needs."
    },
    {
      icon: <Code size={24} />,
      title: "Expert Development",
      description: "Our team of experienced developers builds robust and scalable applications."
    },
    {
      icon: <BarChart size={24} />,
      title: "Data-Driven Approach",
      description: "We leverage analytics and insights to make informed decisions for your project."
    },
    {
      icon: <Zap size={24} />,
      title: "Fast Performance",
      description: "Optimized code and efficient architecture ensure lightning-fast performance."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our services stand out from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
