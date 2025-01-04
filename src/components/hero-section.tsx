"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 mx-auto text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8"
        >
          <Image
            src="/saurabh.JPG"
            alt="Profile"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
        >
          <TypeAnimation
            sequence={[
              `Hi, I'm Saurabh!`, 2000,
              'Full Stack Developer',
              2000,
              'Tech Lead',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Building scalable solutions and leading high-performance teams to deliver exceptional digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button size="lg" className="group" onClick={() => window.open("https://github.com/bhaleraosaurabh", "_blank")}>
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.open("/saurabh_resume.pdf", "_blank")}>
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com/bhaleraosaurabh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/saurabh3809" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:saurabhbhalerao1989@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}