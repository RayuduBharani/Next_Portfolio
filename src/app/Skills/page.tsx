import { CodeIcon } from '@radix-ui/react-icons'
import React from 'react'


export default function Skills() {
  return (
    <div className='w-full h-[600px] flex flex-col justify-center items-center'>
      <div className='w-[80%] h-[90%] bg-secondary rounded-lg max-sm:px-3'>
        <p className='font-bold text-center mt-10 text-lg'>What Skills Do I Have For Now ?</p>
        <div className='w-[100%] h-[80%] flex justify-center items-center gap-5 max-sm:gap-0 max-sm:items-baseline max-sm:h-[390px] max-sm:py-10'>
          <div className='w-[100%] h-[200px] flex justify-center flex-wrap items-center gap-2'>
            <div className='bg-background w-[200px] h-[50px] flex justify-center  items-center gap-1 max-sm:gap-3'>
              <div className='w-[30%] h-[100%]'>
                <img className='w-full h-full' src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" />
              </div>
              <h1 className='font-bold'>HTML</h1>
            </div>

            <div className='bg-background w-[200px] h-[50px] flex justify-center  items-center gap-3'>
              <div className='w-[30%] h-[100%]'>
                <img className='w-full h-full' src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="" />
              </div>
              <h1 className='font-bold'>CSS</h1>
            </div>

            <div className='bg-background w-[200px] h-[50px] flex justify-center  items-center gap-3'>
              <div className='w-[30%] h-[100%]'>
                <img className='w-full h-full' src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="" />
              </div>
              <h1 className='font-bold'>JavaScript</h1>
            </div>

            <div className='bg-background w-[200px] h-[50px] flex justify-center  items-center gap-3'>
              <div className='w-[23%] h-[90%]'>
                <img className='w-full h-full' src="https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000" alt="" />
              </div>
              <h1 className='font-bold'>React js</h1>
            </div>

            <div className='bg-background w-[200px] h-[50px] flex justify-center  items-center gap-3'>
              <div className='w-[30%] h-[100%]'>
                <img className='w-full h-full' src="https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000" alt="" />
              </div>
              <h1 className='font-bold'>Express Js</h1>
            </div>

            <div className='bg-background w-[200px] h-[50px] flex justify-center  items-center gap-3'>
              <div className='w-[25%] h-[90%] rounded-full overflow-hidden'>
                <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAhKP9zXin_1eaek1_lCAGu3tKI1pwcMe9Hw&s" alt="" />
              </div>
              <h1 className='font-bold'>Next js</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
