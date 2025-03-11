
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/ui-custom/Hero";
import FeatureCard from "@/components/ui-custom/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  MessageCircle,
  LineChart,
  Users,
  Award,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curated Learning Paths",
    description:
      "Follow structured learning paths designed by language experts to progress from beginner to advanced levels at your own pace.",
  },
  {
    icon: MessageCircle,
    title: "AI Conversation Practice",
    description:
      "Practice real Japanese conversations with our AI system that adapts to your skill level and provides instant feedback.",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed progress tracking and performance analytics to identify areas for improvement.",
  },
  {
    icon: Users,
    title: "Group Learning",
    description:
      "Join study groups with friends or classmates to motivate each other and track group progress towards learning goals.",
  },
  {
    icon: Award,
    title: "Achievement System",
    description:
      "Earn badges and rewards as you complete lessons, master concepts, and reach important milestones in your learning journey.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Access content and learn Japanese in your preferred language with our platform's support for 42+ interface languages.",
  },
];

const Index = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Hero
        title="Master Japanese with AI-Powered Learning"
        subtitle="Nihongo Cafe provides an immersive, personalized learning experience that makes Japanese language acquisition intuitive and enjoyable."
        ctaText="Start Learning"
        ctaLink="/register"
        secondaryCtaText="Explore Courses"
        secondaryCtaLink="/courses"
        imageSrc="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
          >
            Why Choose Nihongo Cafe
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            A Smarter Way to Learn Japanese
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Our platform combines proven language learning methodologies with cutting-edge AI technology
            to create a personalized, effective, and engaging learning experience.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Student learning Japanese"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Learn Naturally, Like You're in Japan
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our immersive approach simulates the experience of learning Japanese in its natural context.
                  Through interactive content, cultural insights, and AI-powered conversation practice, you'll
                  develop practical language skills that you can use in real-life situations.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Authentic materials created by native speakers",
                    "Cultural context integrated into every lesson",
                    "Natural speech patterns and conversational Japanese",
                    "Focus on practical, everyday language use",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="mr-2 h-6 w-6 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link to="/courses">Explore Our Courses</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            Ready to Start Your Japanese Learning Journey?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Join thousands of students who are already mastering Japanese with Nihongo Cafe's
            innovative learning platform. Start your free trial today.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto px-8">
              <Link to="/register">Sign Up Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8">
              <Link to="/login">Login</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
