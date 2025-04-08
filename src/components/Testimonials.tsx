import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, avatar }) => {
  return (
    <Card className="border-0 shadow-md">
      <CardContent className="pt-6">
        <p className="text-lg mb-6">"{quote}"</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Working with this team was a game-changer for our business. They delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "The attention to detail and technical expertise demonstrated by the team is truly impressive.",
      author: "Michael Chen",
      role: "CTO, InnovateCorp",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "Our project was delivered on time and on budget. I couldn't be happier with the results.",
      author: "Emily Rodriguez",
      role: "Product Manager, GrowthLabs",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
