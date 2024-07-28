import Project from '@/components/pages/project'
import React from 'react'

export default function ProjectsPage() {
    return (
        <div className='w-full h-[600px] flex flex-col items-center'>
            <h1 className='text-center font-bold text-primary text-xl mt-5 mr-5'>Projects</h1>
            <div className='w-[80%] h-[90%] mt-1 overflow-y-auto hide-scrollbar'>
                <Project
                    image="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg"
                    projectContent='A Personal Blog Site Where You Can Post A Blog And Comment On Other BlogPosts. This Site Has User Authentication And Database For Realtime Updates.'
                    title='Blogify Website'
                    heading='React js website'
                    link='https://blog-app-frontend-gamma.vercel.app/home'
                />

                <Project
                    image="https://png.pngtree.com/png-clipart/20231203/original/pngtree-mp3-blue-glossy-web-icon-audio-photo-png-image_13759196.png"
                    projectContent='Explore our collection of high-quality MP3 audio files available for instant download. Enjoy seamless access to your favorite tracks anytime, anywhere'
                    title='Songs Download Website'
                    heading='React js website'
                    link='https://yt-songs-download.vercel.app/'
                />

                <Project
                    image="https://www.clipartmax.com/png/small/362-3624236_icon-preset-recipe-icon.png"
                    projectContent='Discover delicious recipes with our easy-to-use recipe finder. Download and enjoy curated MP3 audio guides for step-by-step cooking instructions.'
                    title='Recipe Finder Website'
                    heading='React js website'
                    link='https://recipe-finder-nine-cyan.vercel.app/'
                />
            </div>
        </div>
    )
}
