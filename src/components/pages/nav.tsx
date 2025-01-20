import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ModeToggle } from '../toggle'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logs } from 'lucide-react'


export default function Nav() {
  return (
    <div className='w-full h-[75px] flex'>
      <Sheet>
        <div className='w-[30%] h-full flex justify-center items-center max-sm:w-[100%] max-sm:justify-between'>
          <SheetTrigger><Logs className='size-6 hidden max-sm:block ml-5' /></SheetTrigger>
          <p className='text-2xl font-bold text-primary max-sm:justify-around max-sm:text-2xl'>Bharani&apos;  s</p>
        </div>
        <div className='w-[70%] h-full flex items-center max-sm:w-[50%] max-sm:justify-end max-sm:mr-4'>
          <ul className='flex w-[60%] h-full justify-around text-sm font-bold items-center text-neutral-500 max-sm:hidden'>
            <Link href={'/'}><li className='cursor-pointer'>Home</li></Link>
            <Link href={'/About'}><li className='cursor-pointer'>About</li></Link>
            <Link href={'/Projects'}><li className='cursor-pointer'>Projects</li></Link>
            <Link href={'Skills'}><li className='cursor-pointer'>Skills</li></Link>
            <Link href={'/Contact'}><li className='cursor-pointer'>Contact Me</li></Link>
          </ul>
          <Button className='ml-28 mr-5 max-sm:ml-0 max-sm:hidden' asChild><Link href={'https://drive.google.com/file/d/1N4W8RDSDBysHDspvXss4Pu2hJ7-Ge_Ge/view?usp=sharing'}>Resume </Link></Button>
          <ModeToggle />
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Hello Bharani Rayudu</SheetTitle>
              <SheetDescription asChild>
                <ul className='flex w-[100%] h-[500px] flex-col text-sm font-bold items-center text-neutral-500 gap-6 pt-10'>
                  <Link href={'/'}><li className='cursor-pointer'>Home</li></Link>
                  <Link href={'/About'}><li className='cursor-pointer'>About</li></Link>
                  <Link href={'/Projects'}><li className='cursor-pointer'>Projects</li></Link>
                  <Link href={'Skills'}><li className='cursor-pointer'>Skills</li></Link>
                  <Link href={'/Contact'}><li className='cursor-pointer'>Contact Me</li></Link>
                  <Link href={'https://drive.google.com/file/d/1N4W8RDSDBysHDspvXss4Pu2hJ7-Ge_Ge/view?usp=sharing'}><Button className='ml-28 mr-5 max-sm:ml-7'>Resume</Button></Link>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </div>
      </Sheet>
    </div>
  )
}
