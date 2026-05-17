import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Reviews from "@/components/site/Reviews";
import Showcase from "@/components/site/Showcase";
import Features from "@/components/site/Features";
import StoreExperience from "@/components/site/StoreExperience";
import Locations from "@/components/site/Locations";
import ExperienceBanner from "@/components/site/ExperienceBanner";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import LoadingScreen from "@/components/site/LoadingScreen";
import Cursor from "@/components/site/Cursor";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dj's iStore — Punjab's Most Trusted iPhone Destination" },
      { name: "description", content: "Genuine iPhones, Open Box devices and premium Apple accessories in Chandigarh & Patiala. Trade-in, sell or upgrade with complete trust." },
      { property: "og:title", content: "Dj's iStore — Premium iPhone Showroom" },
      { property: "og:description", content: "Luxury Apple experience in Chandigarh & Patiala." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative noise">
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        <Showcase />
        <Features />
        <StoreExperience />
        <Locations />
        <ExperienceBanner />
        <Faq />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
