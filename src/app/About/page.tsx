"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Code2, Gamepad2, GraduationCap } from 'lucide-react'

export default function page() {
  return (
    <div className='w-full h-svh bg-gradient-to-b from-background to-background/80'>
      <div className='max-w-4xl mx-auto px-4 py-10 h-full overflow-y-scroll hide-scrollbar'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='space-y-16'
        >
          {/* Header Section */}
          <div className='text-center space-y-4'>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-2xl md:text-2xl font-bold text-primary'
            >
              About Me
            </motion.h1>
            <p className='text-neutral-400 text-lg max-w-2xl mx-auto'>
              Passionate developer crafting digital experiences with modern web technologies
            </p>
          </div>

          {/* Profile Section */}
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className='relative group'
            >
              <div className='absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-40 group-hover:opacity-75 transition'></div>
              <img 
                className='relative rounded-full w-full max-w-md mx-auto shadow-2xl transform transition hover:scale-105'
                src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" 
                alt="Profile"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className='space-y-6'
            >
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold'>
                  Rayudu Bharani
                </h2>
                <p className='text-neutral-400 leading-relaxed'>
                  Full-stack developer specializing in MERN stack and Next.js. Currently pursuing B.Tech in Computer Science and Data Science at KIET College, Kakinada.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className='grid grid-cols-2 gap-4'>
                {[
                  { icon: GraduationCap, title: 'Education', text: 'B.Tech CS & DS' },
                  { icon: Code2, title: 'Experience', text: 'Full Stack Development' },
                  { icon: BookOpen, title: 'Learning', text: 'Next.js & React' },
                  { icon: Gamepad2, title: 'Hobbies', text: 'Gaming & Coding' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className='p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition'
                  >
                    <item.icon className='h-6 w-6 text-primary mb-2' />
                    <h3 className='font-semibold'>{item.title}</h3>
                    <p className='text-sm text-neutral-400'>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='space-y-6'
          >
            <h2 className='text-2xl font-bold text-center'>Technologies I Work With</h2>
            <div className='flex flex-wrap justify-center gap-3'>
              {[
                'Next.js', 'React', 'MongoDB', 'Express', 'Node.js', 'TypeScript',
                'HTML', 'CSS', 'JavaScript', 'Git', 'Tailwind CSS', 'REST API'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className='px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm hover:bg-primary/20 transition cursor-default'
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
