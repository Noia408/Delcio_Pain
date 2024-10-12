'use client'
import Image from "next/image";
import Link from "next/link";

interface LinkPropt{
  nome:string;
  logo:string;
  links:string;
}

export default function LinkSocial({nome, logo, links}:LinkPropt) {
  return(
    <div>
      <Link href={links} className="w-full h-full flex py-[0.4vw] max-sm:py-[0.8vw] gap-[1vw] max-sm:gap-[2vw] px-[1vw] absolute top-[0.3vw] left-[0.3vw] max-sm:top-[1vw] max-sm:left-[1vw] focus:top-[0vw] focus:left-[0vw] duration-300 bg-[#111111] border-[#cd7f32] border">
        <div className="flex items-center justify-center w-[3.2vw] max-sm:w-[9vw] max-w-fit h-full">
          <Image src={logo} className="w-full object-cover" alt="" width={1000} height={1000}/>
        </div>
        <div className="h-full w-fit flex items-center">
          <span className="text-[1.7vw] max-sm:text-[3.5vw] text-white mt-[0.1vw]">{nome}</span>
        </div>
      </Link>
    </div>
  )
}