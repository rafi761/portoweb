import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import Pricing from "@/components/LandingPage/Pricing";
import Services from "@/components/LandingPage/Services";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      {/* <Pricing /> */}
      <Footer />
    </main>
  );
}
