
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-nihongo-paper/80 to-background" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24 lg:py-32"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-nihongo-ink sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" className="px-8">
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          )}
        </motion.div>
        
        {imageSrc && (
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative mt-16 w-full max-w-5xl overflow-hidden rounded-xl shadow-elevated"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <img
                src={imageSrc}
                alt="Nihongo Cafe"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;
