
'use client';

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className=" md:w-[100vw] md:h-[150vh]  ">

      <div className="relative h-[100vh]">
        <div className="flex absolute top-[10%] left-[20%] md:text-[250px] trans-text border-text items-start justify-start font-lalit  font-black text-start text-grad "> HELLO</div>

        <div className="flex sticky top-[45%] left-[20%] md:text-[72px] bg-purple-400 bg-opacity-80 trans-text  w-3/5 font-lalit items-start justify-start text-start">I am Shreeshail</div>

      </div>

      <div className="h-[5vh]"></div>

      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        viewport={{once: false}}
        
        className=" md:text-[48px] font-lalit font-light pl-[350px]"
      >

        Bachelor of Computer Science(Advanced) student <br />
        Front End Developer
      </motion.div>


      <div className="absolute left-[20%]">        {sideWaves('')}</div>

    </section>


  );
}



const sideWaves = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={1000} {...props}>
    <path
      fill="#a76ccf"
      d="M2045 3000h-139v-214h142v-215h22v-214h-227v-214h278v-214h-102v-215h244v-214h-240v-214h-152v-215h338V857h-155V643h206V429h-85V214h-367V0h1192v3000Z"
    />
    <path
      fill="#a263cc"
      d="M2299 3000h36v-214h-71v-215h64v-214h-109v-214h-167v-214h42v-215h274v-214h-407v-214h234v-215h14V857h157V643h-237V429h21V214h-87V0h937v3000Z"
    />
    <path
      fill="#9c5aca"
      d="M2161 3000h295v-214h-342v-215h263v-214h-143v-214h199v-214h-14v-215h-100v-214h154v-214h41v-215h-310V857h-63V643h62V429h109V214h182V0h506v3000Z"
    />
    <path
      fill="#9751c7"
      d="M2498 3000h136v-214h-55v-215h-221v-214h-61v-214h191v-214h-20v-215h-138v-214h190v-214h-73v-215h4V857h185V643h-267V429h-4V214h242V0h393v3000Z"
    />
    <path
      fill="#9148c4"
      d="M2423 3000h238v-214h17v-215h-119v-214h80v-214h-169v-214h250v-215h15v-214h-152v-214h-67v-215h155V857h69V643h-18V429h-14V214h-279V0h571v3000Z"
    />
    <path
      fill="#8c3ec1"
      d="M2872 3000h-276v-214h133v-215h148v-214h-172v-214h130v-214h-117v-215h123v-214h-87v-214h50v-215h-69V857h-83V643h-4V429h148V214h9V0h195v3000Z"
    />
    <path
      fill="#8633be"
      d="M2764 3000h63v-214h-109v-215h82v-214h100v-214h-112v-214h-64v-215h155v-214h-170v-214h49v-215h143V857h-40V643h-64V429h-79V214h87V0h195v3000Z"
    />
  </svg>
)




