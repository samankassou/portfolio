import Navbar from "./components/layout/Navbar";
import LeftSidebar from "./components/layout/LeftSidebar";
import RightSidebar from "./components/layout/RightSidebar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import Blogs from "./components/sections/Blogs";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <div className="mx-auto flex gap-8 px-0 py-5 sm:px-8 lg:max-w-3xl xl:max-w-[1400px]">
      <LeftSidebar />
      <div className="flex-1 min-w-0">
        <Navbar />
        <Hero />
          <main className="grid grid-cols-1 gap-16 px-4 md:px-6 md:gap-24 xl:gap-56">
            {/* Services */}
            <section>
              <h2 className="mb-3 text-center text-2xl font-bold leading-8 text-base-content md:mb-4 md:text-3xl dark:text-base-100">
                My Services
              </h2>
              <p className="mx-auto mb-10 max-w-[438px] text-center text-sm leading-6 text-secondary/60 md:mb-12 dark:text-base-100 dark:text-base-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. lorem
                ipsum
              </p>
              {/* Liste des services */}
              <Services />
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-3 text-center text-2xl font-bold leading-8 text-base-content md:mb-4 md:text-3xl dark:text-base-100">
                Education
              </h2>
              <p className="mx-auto mb-10 max-w-[438px] text-center text-sm leading-6 text-secondary/60 md:mb-12 dark:text-base-100 dark:text-base-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. lorem
                ipsum
              </p>
              {/* Liste des parcours */}
              <Education />
            </section>

            {/* Experience */}
            <section>
              <h2 className="mb-3 text-center text-2xl font-bold leading-8 text-base-content md:mb-4 md:text-3xl dark:text-base-100">
                Experience
              </h2>
              <p className="mx-auto mb-10 max-w-[438px] text-center text-sm leading-6 text-secondary/60 md:mb-12 dark:text-base-100 dark:text-base-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. lorem
                ipsum
              </p>
              {/* Liste des expériences */}
              <Experience />
            </section>

            {/* Portfolio */}
            <section>
              <div className="mb-8">
                <h2 className="mb-3 text-center text-2xl font-bold leading-8 text-base-content md:mb-4 md:text-3xl dark:text-base-100">
                  Portfolio
                </h2>
                <p className="mx-auto mb-10 max-w-[438px] text-center text-sm leading-6 text-secondary/60 md:mb-12 dark:text-base-100 dark:text-base-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  lorem ipsum. Minim mollit non deserunt ullamco est sit aliqua
                  dolor do amet.
                </p>
              </div>
              {/* Portfolio Filter and Projects */}
              <Portfolio />
            </section>

            {/* Testimonials */}
            <section>
              <div className="mb-8">
                <h2 className="mb-3 text-center text-2xl font-bold text-base-content md:mb-4 md:text-3xl dark:text-base-100">
                  Testimonials
                </h2>
                <p className="mx-auto mb-10 max-w-[438px] text-center text-sm text-secondary/60 md:mb-12 dark:text-base-100 dark:text-base-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  lorem ipsum
                </p>
              </div>
              {/* Liste des testimonials */}
              <Testimonials />
            </section>

            {/* Latest blogs */}
            <section>
              <h2 className="mb-3 text-center text-2xl font-bold text-base-content md:mb-4 md:text-3xl dark:text-base-100">
                Latest blogs
              </h2>
              <p className="mx-auto mb-10 max-w-[438px] text-center text-sm text-secondary/60 md:mb-12 dark:text-base-100 dark:text-base-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. Lorem
                ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
              {/* Liste des blogs */}
              <Blogs />
            </section>

            {/* Get in touch */}
            <section>
              <h2 className="mb-3 text-center text-2xl font-bold text-base-content md:mb-4 md:text-3xl dark:text-base-100">
                Get in touch
              </h2>
              <p className="mx-auto mb-10 max-w-[438px] text-center text-sm leading-6 text-secondary/60 md:mb-12 dark:text-base-100 dark:text-base-400">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. Lorem
                ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
              {/* Contact form and info */}
              <Contact />
            </section>
          </main>
        <Footer />
      </div>
      <RightSidebar />
    </div>
  );
}
