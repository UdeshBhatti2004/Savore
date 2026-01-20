import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <>
   
       <Navbar/>
      <Hero />
      <Menu/>
      <Gallery/>
      <About/>
      <Booking/>
      <Footer/>
     
 
    </>
  );
}
