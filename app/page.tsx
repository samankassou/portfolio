import Navbar from "./components/layout/Navbar";
import LeftSidebar from "./components/layout/LeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import SectionHeader from "./components/ui/SectionHeader";
import Snowfall from "./components/christmas/Snowfall";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Snowfall />
      <ScrollToTop />
      <div className="mx-auto flex gap-6 overflow-x-hidden px-4 py-5 sm:px-8 lg:max-w-6xl xl:max-w-[1600px] xl:gap-8">
        <LeftSidebar />
        <div className="min-w-0 flex-1 xl:mr-[120px]">
          <Navbar />
          <Hero />
          <main className="grid grid-cols-1 gap-16 md:gap-20">
            {/* Selected case studies */}
            <section id="portfolio">
              <SectionHeader
                title="Selected case studies"
                subtitle="Anonymized examples of real BI, AI, cloud, and application work. Confidential business details have intentionally been omitted."
              />
              <Portfolio />
            </section>

            {/* Experience */}
            <section id="experience">
              <SectionHeader
                title="Experience"
                subtitle="A professional journey from web development and application support to leading business intelligence and AI initiatives."
              />
              <Experience />
            </section>

            {/* Services */}
            <section id="services">
              <SectionHeader
                title="How I can help"
                subtitle="Focused expertise for organizations modernizing their data, automation, cloud, and business applications."
              />
              <Services />
            </section>

            {/* Certifications */}
            <section id="certifications">
              <SectionHeader
                title="Certifications"
                subtitle="Professional certifications and credentials demonstrating expertise in cloud technologies, business intelligence, and agile methodologies."
              />
              <Certifications />
            </section>

            {/* Testimonials */}
            <section id="testimonials">
              <SectionHeader
                title="Testimonials"
                subtitle="What colleagues and collaborators say about working with me on software projects and technical solutions."
              />
              <Testimonials />
            </section>

            {/* Education */}
            <section id="education">
              <SectionHeader
                title="Education"
                subtitle="Academic training in software engineering, system architecture, and IT project management."
              />
              <Education />
            </section>

            {/* Get in touch */}
            <section id="contact">
              <SectionHeader
                title="Get in touch"
                subtitle="Let's discuss your project needs and explore how we can work together to create innovative solutions for your business."
              />
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </div>
      <RightSidebar />
    </>
  );
}
