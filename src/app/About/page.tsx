import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
      <h1 className='font-bold pt-5 text-2xl text-primary text-center max-sm:hidden'>About Me</h1>
      <div className='w-full h-fit flex max-sm:flex-col'>
        <div className='w-[45%] h-[525px] flex justify-end items-center max-sm:h-fit max-sm:w-full max-sm:justify-center max-sm:mt-6'>
          <div className='w-[60%] h-[80%]'>
            <img className='rounded-full' src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg" alt="" />
          </div>
        </div>
        <div className='w-[60%] h-[525px] flex flex-col items-center gap-5 justify-center max-sm:w-full max-sm:justify-center'>
          <div className='w-[70%] h-[70%]'>
            <p className='text-xl mb-7'>Who is <span className='font-bold text-primary'>Rayudu Bharani ?</span></p>
            <p className='text-neutral-600 font-bold'>I am Bharani , an enthusiastic person who writes code for fun. Currently I&apos;m learning Next js React framework. I&apos;ve used to develop some websites using MERN stack . </p>
            <p className='font-bold text-primary text-xl mb-7 mt-7'>HOBBIES</p>
            <p className='text-neutral-600 font-bold'>I enjoy playing video games and working on full stack projects in my free time. It&apos;s a great balance between relaxing with some gaming and staying productive with coding.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
