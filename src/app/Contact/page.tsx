import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <div className='w-full h-[600px] flex justify-center items-center max-sm:h-fit'>
        <div className='w-[80%] h-[90%] bg-secondary rounded-xl flex max-sm:pt-2 max-sm:flex-col max-sm:w-[90%]'>
            <div className='w-[50%] h-[100%] p-20 max-sm:p-0 max-sm:w-[100%] max-sm:text-center'>
                <p className='font-bold text-primary text-xl'>Let&apos;s Connect</p>
                <p className='font-bold text-neutral-500 mt-8'>I am currently  looking for new  Opportunities , my  inbox is always open .  Whether you have a question or just want to say hi , I&apos;ll try my best to get back to you !</p>
                <div className='w-[80%] h-[100px] flex justify-between items-center max-sm:w-full max-sm:justify-around'>
                    <Link href={'https://www.linkedin.com/in/rayudu-bharani-satya-siva-durgaprasad-35262527a/'}><Linkedin/></Link>
                    <Link href={'https://x.com/?lang=en'}><Twitter/></Link>
                    <Link href={'https://github.com/RayuduBharani'}><Github/></Link>
                    <Link href={'https://www.facebook.com/'}><Facebook/></Link>
                </div>
            </div>
            <div className='w-[50%] h-full p-20 max-sm:p-4 max-sm:w-full'>
                <label className='font-bold max-sm:hidden' htmlFor="name">Name </label>
                <Input className='rounded-lg mt-2 mb-7' id='name' placeholder='Enter your Name . . .'/>

                <label className='font-bold max-sm:hidden' htmlFor="email">Email </label>
                <Input type='email' className='rounded-lg mt-2 mb-7' id='emil' placeholder='Enter Your Email . . .'/>

                <label className='font-bold max-sm:hidden' htmlFor="email">Message </label>
                <Textarea className='rounded-lg mt-2' placeholder='Message . . .'/>

                <Button className='w-full mt-7'>Submit</Button>
            </div>
        </div>
    </div>
  )
}