import Image from "next/image";
import { Intro,Navbar,About,Education,Projects,Footer } from "@/components/Landing";


export default function Home() {
  return (

  <>
  <Navbar />
  <Intro />
  <About />

  <Projects />
  <Footer />
  
  </>
    
  );
}
