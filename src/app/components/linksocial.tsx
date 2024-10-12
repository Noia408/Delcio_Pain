'use client'
import Image from "next/image";
import Link from "next/link";

export default function LinkSocial() {
  return(
    <div>
      <Link href={""} className="w-full h-full flex py-[0.4vw] max-sm:py-[0.8vw] gap-[1vw] max-sm:gap-[2vw] px-[1vw] absolute top-[0.3vw] left-[0.3vw] max-sm:top-[1vw] max-sm:left-[1vw] focus:top-[0vw] focus:left-[0vw] duration-300 bg-[#111111] border-[#cd7f32] border">
        <div className="flex items-center justify-center w-[3.2vw] max-sm:w-[8vw] max-w-fit h-full">
          <Image src={"/assets/pngegg (3).png"} className="h-full" alt="" width={1000} height={1000}/>
        </div>
        <div className="h-full w-fit flex items-center">
          <span className="text-[2vw] max-sm:text-[5vw] text-white mt-[0.1vw]">Facebook</span>
        </div>
      </Link>
    </div>
  )
}