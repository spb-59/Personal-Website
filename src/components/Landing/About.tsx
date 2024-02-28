'use client'

import Marquee from "react-fast-marquee";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import man from "../../../public/man.png";
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine } from "./SVG"

export default function About() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-54%"]);


    return (<section className="" id="about">

        <div className="max-w-[100vw] overflow-x-hidden">
            <Marquee autoFill={true} speed={70} className=" overflow-hidden max-w-[100vw]" >

                <div className="flex text-[72px] px-6 font-anton font-bold">ABOUT ME</div>

                <div className="flex text-[72px] px-6 font-anton font-bold trans-text border-text">ABOUT ME</div>


            </Marquee>

        </div>




        <div ref={targetRef} className="relative h-[200vh] pt-20">
            <div className="sticky top-32 left-20 h-[100vh] overflow-hidden">
                <motion.div style={{ x }} className="flex  h-[80h] w-[200vw]">

                    <div className="flex   w-[100vw] relative">

                        <div className="flex flex-col absolute left-[20%]">

                            <div className="flex text-[52px] font-anton font-bold ">Background</div>
                            <div className="flex text-[26px] w-1/2 font-anton">Ad enim nostrud pariatur non ad aute nulla sint do. Deserunt proident pariatur est ea aliqua in nulla nisi dolor. Proident dolor excepteur qui enim mollit adipisicing magna mollit. Culpa eu velit elit labore amet mollit in quis sint dolor ipsum minim dolore. Ullamco magna non aliqua occaecat mollit commodo qui ut elit ea tempor do culpa duis. Non quis et incididunt irure id magna cupidatat laborum est.</div>

                        </div>

                        <div className="w-1/2 h-1/2 absolute left-[40%] -z-10 "><Image alt={''} src={man} /></div>






                    </div>

                    <div className="flex   w-[100vw] relative">

                        <div className="flex flex-col absolute left-[20%]">

                            <div className="flex text-[52px] font-anton font-bold ">What I Do</div>
                            <div className="flex text-[26px] w-1/2 font-anton">Ad enim nostrud pariatur non ad aute nulla sint do. Deserunt proident pariatur est ea aliqua in nulla nisi dolor. Proident dolor excepteur qui enim mollit adipisicing magna mollit. Culpa eu velit elit labore amet mollit in quis sint dolor ipsum minim dolore. Ullamco magna non aliqua occaecat mollit commodo qui ut elit ea tempor do culpa duis. Non quis et incididunt irure id magna cupidatat laborum est.</div>

                        </div>


                        <div className="w-1/2 h-1/2 absolute left-[50%]  ">
                        <div className="flex min-h-[40vh]" ></div>
                            <div className="grid  grid-cols-3 grid-rows-1 ">


                                <div className="col-start-1 flex gap-5 flex-col w-[72px] col-span-1">
                                    <One />
                                    <Two />
                                    <Three />
                                </div>

                                <div className="col-start-2 flex gap-5 flex-col w-[72px] col-span-1">
                                    <Four />
                                    <Five />
                                    <Six />
                                </div>

                                <div className="col-start-3 flex gap-5 flex-col w-[72px] col-span-1">
                                    <Seven />
                                    <Eight />
                                    <Nine />

                                </div>






                            </div>
                        </div>





                    </div>







                </motion.div>

            </div>
        </div>

        <div className="flex   w-[100vw] h-[80vh] relative">

            <div className="flex flex-col absolute left-[20%] gap-4">

                <div className="flex text-[52px] font-anton font-bold ">Current Experience and volunteering</div>
                <ul>

                    <li className="flex h-[30vh] ">
                        <div className="w-1/4"> BUDI</div>
                        <div className="w-3/5">Qui sint occaecat ullamco officia occaecat qui. Culpa ad nulla qui pariatur pariatur velit officia eu. Enim irure eiusmod eiusmod anim elit ad consequat in incididunt fugiat velit veniam duis. Est in aliquip cupidatat sunt consectetur in nulla. Culpa sit ut Lorem anim excepteur commodo quis laboris proident ipsum veniam duis deserunt deserunt.</div>

                    </li>
                    <li className="flex h-[30vh] ">
                        <div className="w-1/4"> CS CLUB</div>
                        <div className="w-3/5">Qui sint occaecat ullamco officia occaecat qui. Culpa ad nulla qui pariatur pariatur velit officia eu. Enim irure eiusmod eiusmod anim elit ad consequat in incididunt fugiat velit veniam duis. Est in aliquip cupidatat sunt consectetur in nulla. Culpa sit ut Lorem anim excepteur commodo quis laboris proident ipsum veniam duis deserunt deserunt.</div>

                    </li>

                </ul>

            </div>

        </div>












    </section>)
}


