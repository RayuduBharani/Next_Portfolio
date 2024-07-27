import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <div className="w-[70%] h-[80%]">
        <h1 className="font-bold text-4xl text-primary font-sans">Hii , I&apos;m Bharani</h1>
        <p className="font-normal text-neutral-400 w-[80%] text-xl mt-16">I am a MERN stack and Next.js developer specializing in dynamic, high-performance web applications. Passionate about coding and problem-solving and consistently seeks to innovate in the web development field.</p>
        <Link href={'/About'}><Button className="mt-16 mr-16">View Profile</Button></Link>
        <Link href={'/Contact'}><Button variant={"secondary"}> Let&apos;s Work Together</Button></Link>
        <div className="w-[40%] h-fit flex justify-between mt-16">
          <Link href={'https://www.linkedin.com/in/rayudu-bharani-satya-siva-durgaprasad-35262527a/'}><Linkedin /></Link>
          <Link href={'https://x.com/?lang=en'}><Twitter /></Link>
          <Link href={'https://github.com/RayuduBharani'}><Github /></Link>
          <Link href={'https://www.facebook.com/'}><Facebook /></Link>
        </div>
      </div>
    </div>
  );
}
