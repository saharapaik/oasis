import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StudyCafeSection from "@/components/StudyCafeSection";
import VirtualOfficeSection from "@/components/VirtualOfficeSection";
import MeetingRoomSection from "@/components/MeetingRoomSection";
import PrintCafeSection from "@/components/PrintCafeSection";
import EventSection from "@/components/EventSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StudyCafeSection />
      <VirtualOfficeSection />
      <MeetingRoomSection />
      <PrintCafeSection />
      <EventSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
