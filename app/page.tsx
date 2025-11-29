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
import Blogs from "./components/sections/Blogs";
import Contact from "./components/sections/Contact";
import SectionHeader from "./components/ui/SectionHeader";

export default function Home() {
  return (
    <div className="mx-auto flex gap-8 overflow-x-hidden px-4 py-5 sm:px-8 lg:max-w-3xl xl:max-w-[1400px]">
      <LeftSidebar />
      <div className="min-w-0 flex-1">
        <Navbar />
        <Hero />
        <main className="grid grid-cols-1 gap-16 md:gap-24">
          {/* Services */}
          <section>
            <SectionHeader
              title="My Services"
              subtitle="Specialized expertise in business intelligence, cloud solutions, AI automation, and full-stack development to help transform your business."
            />
            <Services />
          </section>

          {/* Education */}
          <section>
            <SectionHeader
              title="Education"
              subtitle="Academic background in software engineering with a focus on system architecture and project management."
            />
            <Education />
          </section>

          {/* Experience */}
          <section>
            <SectionHeader
              title="Experience"
              subtitle="My professional journey in software engineering, from web development to leading BI and AI projects."
            />
            <Experience />
          </section>

          {/* Certifications */}
          <section>
            <SectionHeader
              title="Certifications"
              subtitle="Professional certifications and credentials demonstrating expertise in cloud technologies, business intelligence, and agile methodologies."
            />
            <Certifications />
          </section>

          {/* Portfolio */}
          <section>
            <SectionHeader
              title="Portfolio"
              subtitle="A showcase of selected projects demonstrating my expertise in web development, business intelligence, and innovative technical solutions."
            />
            <Portfolio />
          </section>

          {/* Testimonials */}
          <section>
            <SectionHeader
              title="Testimonials"
              subtitle="What colleagues and collaborators say about working with me on software projects and technical solutions."
            />
            <Testimonials />
          </section>

          {/* Latest blogs */}
          <section>
            <SectionHeader
              title="Latest blogs"
              subtitle="Insights and perspectives on software development, cloud technologies, business intelligence, and emerging tech trends."
            />
            <Blogs />
          </section>

          {/* Get in touch */}
          <section>
            <SectionHeader
              title="Get in touch"
              subtitle="Let's discuss your project needs and explore how we can work together to create innovative solutions for your business."
            />
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
      <RightSidebar />
    </div>
  );
}
