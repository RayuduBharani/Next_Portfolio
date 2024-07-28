import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Project({ image, heading, title, projectContent ,link }: any) {
    return (
        <div className='w-full h-[219px] bg-secondary rounded-xl flex mb-5 max-sm:flex-col max-sm:h-fit'>
            <div className='w-[20%] h-full flex justify-center items-center max-sm:w-full'>
                <img className='rounded-full w-[90%] h-[90%] max-sm:w-[50%] max-sm:h-[50%] max-sm:mt-3' src={image} alt="" />
            </div>
            <div className='w-[80%] h-full py-6 px-20 max-sm:px-1 max-sm:w-[100%]'>
                <div className='max-sm:flex max-sm:flex-col max-sm:items-center'>
                    <p className='font-bold text-xl text-destructive'>{title}</p>
                    <p className='text-xs text-neutral-400 pt-2'>{heading}</p>
                    <p className='text-sm font-bold mt-5 max-sm:text-center'>{projectContent}</p>
                    <div className='underline cursor-pointer'>
                        <Link className="flex mt-5 gap-2 " href={link}>
                            <ExternalLink className='size-5 mt-0.5' />
                            <p>Get There</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
