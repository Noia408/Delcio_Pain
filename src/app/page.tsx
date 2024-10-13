'use client'

import Image from "next/image";
import LinkSocial from "./components/linksocial";

export default function Home() {
  return (
    <div className="h-full w-full flex max-sm:flex-col-reverse max-sm:justify-end gap-[2vw] relative">
      <div className="w-[60%] h-full max-sm:w-full max-sm:h-fit flex flex-col justify-between gap-[1vw] max-sm:gap-[3vw]">
        <div className="w-full h-[50%] max-sm:h-fit flex items-center max-sm:justify-start justify-center ">
          <h1 className="text-white text-[9vw] max-sm:text-[13vw] underline decoration-[#CD7F32]">Delcio Pain</h1>
        </div>
        <div className="w-full h-fit border-l-4 border-[#CD7F32] flex flex-col gap-[1vw] max-sm:gap-[1.5vw] pl-[2vw] pb-[1vw]">
          <h1 className="text-white text-[1.8vw] max-sm:text-[5vw]">Biografía</h1>
          <span className="text-white text-[1.5vw] max-sm:text-[3vw]">Artista Independente que está navegando na vibe do Hip-Hop e Trap Soul cantando sempre sobre o seu cotidiano.</span>
        </div>
        <div className="w-full h-fit border-l-4 border-[#CD7F32] flex flex-col gap-[1vw] max-sm:gap-[1.5vw] pl-[2vw] pb-[1vw]">
          <h1 className="text-white text-[1.8vw] max-sm:text-[5vw]">Minhas Mideas Sociais</h1>
          <div className="grid-cols-3 max-sm:grid-cols-2 grid gap-[1vw] max-sm:gap-[3vw] w-full h-fit">
            <div className="w-full h-[4vw] max-sm:h-[11vw] bg-[#cd7f32] relative"><LinkSocial nome="Spotify" logo="/assets/Spotify.png" links="https://open.spotify.com/artist/5erBqNwZ5aOgznp73drbmS?si=1hz5qnjXSIWLWNENwDmGoA" /></div>
            <div className="w-full h-[4vw] max-sm:h-[11vw] bg-[#cd7f32] relative"><LinkSocial nome="Sound Cloud" logo="/assets/SoundClound.png" links="https://on.soundcloud.com/MM8f5ArLineJ2EgN8" /></div>
            <div className="w-full h-[4vw] max-sm:h-[11vw] bg-[#cd7f32] relative"><LinkSocial nome="Facebook" logo="/assets/Facebook.png" links="https://www.facebook.com/61558611417071/posts/pfbid02raQZEchpMVUZD23SwkDdzQh737RRbYRFRnRet66kRMbGRJE7Hc2ZyeZvZoSHXFDl/?app=fbl" /></div>
            <div className="w-full h-[4vw] max-sm:h-[11vw] bg-[#cd7f32] relative"><LinkSocial nome="Youtube" logo="/assets/Youtube.png" links="https://youtube.com/@delciopain?si=SKr2-9tusVUTr74c" /></div>
            <div className="w-full h-[4vw] max-sm:h-[11vw] bg-[#cd7f32] relative"><LinkSocial nome="TikTok" logo="/assets/TikTok.png" links="https://www.tiktok.com/@delciopain?_r=1&_d=e7e39e5h8cfk75&sec_uid=MS4wLjABAAAAlb-JokE-mPVq6n4kqsBbGP7fmRr3TCQDS33qkQieadWaEDRWvRwGxIaUnbzxEjGw&share_author_id=7040509628606448646&sharer_language=pt&source=h5_m&u_code=dm64i2ckmje10f&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAAlb-JokE-mPVq6n4kqsBbGP7fmRr3TCQDS33qkQieadWaEDRWvRwGxIaUnbzxEjGw&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7040509628606448646&share_link_id=0656AE26-CBB5-48FC-80B3-F716D02939E0&share_app_id=1233" /></div>
            <div className="w-full h-[4vw] max-sm:h-[11vw] bg-[#cd7f32] relative"><LinkSocial nome="Instagram" logo="/assets/Instagram.png" links="https://www.instagram.com/delcio_pain44?igsh=NTc4MTIwNjQ2YQ==" /></div>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-full max-sm:w-full max-sm:h-[90vw] bg-[#CD7F32] relative">
        <div className="w-full h-full absolute top-[1vw] right-[1vw] max-sm:top-[2vw] max-sm:right-[2vw] bg-white overflow-hidden flex justify-center">
          <Image src={"/assets/Imagem WhatsApp 2024-10-07 às 20.36.54_1d8ebbfc.jpg"} className="h-full object-cover" alt="" width={700} height={1000} />
        </div>
      </div>
    </div>
  );
}
