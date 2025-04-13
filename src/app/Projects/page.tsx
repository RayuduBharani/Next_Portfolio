"use client"

import React from 'react'
import Project from '@/components/pages/project'
import { motion } from 'framer-motion'
import image from "../../../public/image.png"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            type: 'spring',
        },
    }),
}

const projects = [
    {
        image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-1e58-61f6-94b5-bcecd9dea327/raw?se=2025-04-13T13%3A52%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=3884f9d7-8cd8-5919-aee3-65e083c9c161&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-13T10%3A38%3A01Z&ske=2025-04-14T10%3A38%3A01Z&sks=b&skv=2024-08-04&sig=LhLQehGgTjCx9rCwZlyT7BGdPxebLKhTeeEbCppzuM4%3D",
        projectContent: 'A Comprehensive Platform for DSA Mastery and Career Advancement (Inspired by CodeDale)',
        title: 'PrepFlow Website (Codedale clone)',
        heading: 'Next js website',
        link: 'https://github.com/RayuduBharani/prepflow'
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        projectContent: 'YouTube Review System with question-based analysis and PDF report generation. Admin can manage questions, and users can evaluate and comment on YouTube channels.',
        title: 'YouTube Review System',
        heading: 'Next js website',
        link: 'https://github.com/RayuduBharani/youtube-review-system'
    },
    {
        image: "https://c8.alamy.com/comp/2E61440/course-management-system-word-concepts-banner-2E61440.jpg",
        projectContent: 'Student can enroll in a course, view course details, and manage their courses. Admin can add, update, and delete courses.',
        title: 'Course Management System',
        heading: 'React js website',
        link: 'https://github.com/RayuduBharani/Course_management_system'
    },
    {
        image: "https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg",
        projectContent: 'A Personal Blog Site Where You Can Post A Blog And Comment On Other BlogPosts. This Site Has User Authentication And Database For Realtime Updates.',
        title: 'Blogify Website',
        heading: 'React js website',
        link: 'https://blog-app-frontend-gamma.vercel.app/home'
    },
    {
        image: "https://png.pngtree.com/png-clipart/20231203/original/pngtree-mp3-blue-glossy-web-icon-audio-photo-png-image_13759196.png",
        projectContent: 'Explore our collection of high-quality MP3 audio files available for instant download. Enjoy seamless access to your favorite tracks anytime, anywhere',
        title: 'Songs Download Website',
        heading: 'React js website',
        link: 'https://yt-songs-download.vercel.app/'
    },
    {
        image: "https://www.clipartmax.com/png/small/362-3624236_icon-preset-recipe-icon.png",
        projectContent: 'Discover delicious recipes with our easy-to-use recipe finder. Download and enjoy curated MP3 audio guides for step-by-step cooking instructions.',
        title: 'Recipe Finder Website',
        heading: 'React js website',
        link: 'https://recipe-finder-nine-cyan.vercel.app/'
    }
]

export default function ProjectsPage() {
    return (
        <div className='w-full h-[600px] flex flex-col items-center'>
            <h1 className='text-center font-bold text-primary text-xl mt-5 mr-5'>Projects</h1>
            <div className='w-[80%] h-[90%] mt-1 overflow-y-auto hide-scrollbar space-y-4'>
                {projects.map((proj, index) => (
                    <motion.div
                        key={proj.title}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                    >
                        <Project
                            image={proj.image}
                            projectContent={proj.projectContent}
                            title={proj.title}
                            heading={proj.heading}
                            link={proj.link}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
