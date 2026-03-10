import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import MetricsSection from "@/components/home/MetricsSection";
import MaterialSection from "@/components/home/MaterialSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WorkshopSection from "@/components/home/WorkshopSection";
import CountersSection from "@/components/home/CountersSection";
import BlogSection from "@/components/home/BlogSection";
import PreservingSection from "@/components/home/PreservingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/* ---------- Homepage: 14 Sections ----------
 * 1. Navbar (in App layout)
 * 2. Hero
 * 3. Heritage Partners
 * 4. Restoration Expertise
 * 5. Before & After Slider
 * 6. Craftsmanship Metrics
 * 7. Material Sourcing
 * 8. Featured Projects
 * 9. Workshop Showcase
 * 10. Legacy Counters
 * 11. Blog
 * 12. Preserving the Past
 * 13. Client Appreciations
 * 14. CTA & Footer (in App layout)
 */
const Index = () => (
  <>
    <HeroSection />
    <PartnersSection />
    <ExpertiseSection />
    <BeforeAfterSlider />
    <MetricsSection />
    <MaterialSection />
    <ProjectsSection />
    <WorkshopSection />
    <CountersSection />
    <BlogSection />
    <PreservingSection />
    <TestimonialsSection />
  </>
);

export default Index;
