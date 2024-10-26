import Image from "next/image"
import bg from "../../../../public/background/about-background.jpeg"
import AboutDetails from "@/components/about"
import ProjectList from "@/components/projects"
import { projectsData } from "../../data"

/*
import dynamic from "next/dynamic"

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
})
*/

export default function Home() {
  return (
    <>
      <Image 
      src={bg} 
      priority sizes="100vw"
      alt="background-image" 
      className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"/>

      <div className='relative w-full h-screen flex flex-col items-center justify-center'>
      <div className='absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-48 -translate-x-1/2'>
        <h1 className='fond-bold text-3xl xs:text-3xl sm:text-3xl lg:text-4xl text-accent'>Youngeun</h1>
        <p className='font-light text-foreground text-ls'>Meet the developer behind this portfolio</p>
      </div>
      </div>

      <AboutDetails />
    </>
  );
}