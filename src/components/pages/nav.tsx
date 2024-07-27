import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ModeToggle } from '../toggle'

export default function Nav() {
  return (
    <div className='w-full h-[75px] flex'>
        <div className='w-[30%] h-full flex justify-center items-center'>
            <p className='text-2xl font-bold text-primary'>Bharani&apos;s</p>
        </div>
        <div className='w-[70%] h-full flex items-center'>
            <ul className='flex w-[60%] h-full justify-around text-sm font-bold items-center text-neutral-500'>
                <Link href={'/'}><li className='cursor-pointer'>Home</li></Link>
                <Link href={'/About'}><li className='cursor-pointer'>About</li></Link>
                <Link href={'/Projects'}><li className='cursor-pointer'>Projects</li></Link>
                <Link href={'Skills'}><li className='cursor-pointer'>Skills</li></Link>
                <Link href={'/Contact'}><li className='cursor-pointer'>Contact Me</li></Link>
            </ul>
            <Link href={'https://drive.google.com/file/d/1UN8suFDkwTibSLmL8Jo6gj9RmeIaR933/view?usp=sharing'}><Button className='ml-28 mr-5'>Resume</Button></Link>
            <ModeToggle/>
        </div>
    </div>
  )
}
