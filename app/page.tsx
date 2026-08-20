import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Courses from "@/components/home/Courses";

import Shop from "@/components/home/Shop";
import Services from "@/components/home/Services";
import Appointment from "@/components/home/AppointmentCTA";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import BackToTop from "@/components/layout/BackToTop";
import Hakeem from "@/components/home/Hakeem";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <About />

      <Hakeem />

      <Courses />
     
      <Shop limit={4} />

      <Services />

      <Appointment />

      <Footer />

      <FloatingButtons />

      <BackToTop />
    </>
  );
}