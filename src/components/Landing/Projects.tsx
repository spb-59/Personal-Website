import ai from "../../../public/ai.png";
import Image from "next/image";

export default function Projects() {
    return (
        <section className="relative" id="projects" >

            <div className="flex sticky top-2  left-[20%] md:text-[200px] trans-text border-text bg-blend-multiply items-start justify-start text-start h-[100vh] bg-white bg-opacity-30  font-anton "> PROJECTS</div>


            <div className="flex h-[100vh] items-center justify-center bg-purple-600 bg-blend-multiply">

                <div className="flex w-[55%] items-center gap-6">

                    <div className="flex flex-col w-1/3 h-full text-white">
                    <Image alt={''} src={ai} className="transform hover:scale-110"/>
                    <div className="flex w-1/2">Eu velit excepteur commodo eu labore tempor nulla do aliquip ex.</div>
                    
                    
                    </div>

                         <div className="flex flex-col w-1/3 h-full text-white">
                    <Image alt={''} src={ai}  className=" transform hover:scale-110"/>
                    <div className="flex w-1/2">Eu velit excepteur commodo eu labore tempor nulla do aliquip ex.</div>
                    
                    
                    </div>
                    <div className="flex flex-col w-1/3 h-full text-white">
                    <Image alt={''} src={ai}  className="transform hover:scale-110"/>
                    <div className="flex w-1/2">Eu velit excepteur commodo eu labore tempor nulla do aliquip ex.</div>
                    
                    
                    </div>
                </div>




            </div>














        </section>

    );


};