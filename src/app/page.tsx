"use client"
import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home-page h-screen w-full flex items-center justify-center px-4 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full space-y-6 md:space-y-8"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl -mt-14 md:text-5xl lg:text-6xl font-bold text-primary font-sans"
        >
          Hi, I&apos;m Bharani
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl"
        >
          I am a MERN stack and Next.js developer specializing in dynamic, high-performance web applications. 
          Passionate about coding and problem-solving.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Link href="/About">
            <Button className="w-full sm:w-auto text-base" size="lg">
              View Profile
            </Button>
          </Link>
          <Link href="/Contact">
            <Button className="w-full sm:w-auto text-base" variant="secondary" size="lg">
              Let&apos;s Work Together
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-6 pt-4"
        >
          {[
            { href: 'https://www.linkedin.com/in/rayudu-bharani-satya-siva-durgaprasad-35262527a/', icon: Linkedin },
            { href: 'https://x.com/?lang=en', icon: Twitter },
            { href: 'https://github.com/RayuduBharani', icon: Github },
            { href: 'https://www.facebook.com/', icon: Facebook }
          ].map((social, index) => (
            <Link 
              key={index} 
              href={social.href}
              className="transform transition-transform hover:scale-110 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-6 h-6" />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
