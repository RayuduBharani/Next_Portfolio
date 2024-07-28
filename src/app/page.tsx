import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full py-24 flex justify-center items-center max-sm:py-10">
      <div className="w-[70%] h-[80%] max-sm:h-[85%] max-sm:text-center max-sm:w-full max-sm:px-4">
        <h1 className="font-bold text-4xl text-primary font-sans max-sm:text-2xl">Hii , I&apos;m Bharani</h1>
        <p className="font-normal text-neutral-400 w-[95%] text-xl max-sm:px-8 mt-16 max-sm:mt-8 leading-relaxed">I am a MERN stack and Next.js developer specializing in dynamic, high-performance web applications. Passionate about coding and problem-solving and consistently seeks to innovate in the web development field.</p>
        <div className="flex max-sm:justify-around w-full gap-2">
          <Link href={'/About'}><Button className="mt-16 mr-16 max-sm:mr-0 max-sm:mt-10">View Profile</Button></Link>
          <Link href={'/Contact'}><Button className="mt-16 max-sm:mt-10" variant={"secondary"}> Let&apos;s Work Together</Button></Link>
        </div>
        <div className="w-[40%] h-fit flex justify-between mt-16 max-sm:w-[100%] max-sm:mt-10">
          <Link href={'https://www.linkedin.com/in/rayudu-bharani-satya-siva-durgaprasad-35262527a/'}><Linkedin /></Link>
          <Link href={'https://x.com/?lang=en'}><Twitter /></Link>
          <Link href={'https://github.com/RayuduBharani'}><Github /></Link>
          <Link href={'https://www.facebook.com/'}><Facebook /></Link>
        </div>
      </div>
    </div>
  );
}
