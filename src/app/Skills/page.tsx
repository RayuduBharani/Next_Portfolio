"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Globe, Laptop } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "Tailwind Css", level: 85, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28tj7Dipgkq9h5msRMqazPtviHj7tpx3CLA&s" },
      { name: "JavaScript", level: 80, icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
      { name: "React.js", level: 90, icon: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000" }
      
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Express.js", level: 80, icon: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000" },
      { name: "MongoDB", level: 100, icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000" },
      { name: "Prisma", level: 75, icon: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1608%2F0f93b179-76bf-4ee7-a838-e8222fbef062.png" }
    ]
  },
  {
    title: "Framework & Tools",
    icon: Laptop,
    skills: [
      { name: "Next.js", level: 90, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhKP9zXin_1eaek1_lCAGu3tKI1pwcMe9Hw&s" },
      { name: "Git , Github", level: 80, icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
      { name: "TypeScript", level: 90, icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" }
    ]
  }
]

export default function Skills() {
  return (
    <div className='w-full h-screen'>
      <div className='h-full w-full bg-gradient-to-b from-background to-background/80 px-4 overflow-y-scroll hide-scrollbar'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='space-y-12'
        >
          <div className='text-center space-y-4'>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-3xl md:text-4xl font-bold text-primary'
            >
              Technical Skills
            </motion.h1>
            <p className='text-neutral-400'>Expertise in various web technologies and tools</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className='bg-secondary/50 backdrop-blur-sm rounded-xl p-6 space-y-6'
              >
                <div className='flex items-center gap-3'>
                  <category.icon className='w-6 h-6 text-primary' />
                  <h2 className='text-xl font-semibold'>{category.title}</h2>
                </div>

                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className='group'
                    >
                      <div className='flex items-center gap-3 mb-2'>
                        <div className='w-8 h-8 rounded-md overflow-hidden bg-white/10 p-1'>
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className='w-full h-full object-contain'
                          />
                        </div>
                        <span className='font-medium'>{skill.name}</span>
                      </div>
                      
                      <div className='h-2 bg-secondary rounded-full overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                          className='h-full bg-primary/60 group-hover:bg-primary transition-colors'
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  )
}
