import EducationList from "./components/education/educationList";
import ExperienceList from "./components/experience/experienceList";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import PortfolioContainer from "./components/projects/portfolioContainer";
import ServicesList from "./components/services/servicesList";
import TestimonialsList from "./components/testimonials/testimonialsList";
import LatestBlogsList from "./components/latestBlogs/latestBlogsList";
import ContactContainer from "./components/getInTouch/contactContainer";
import Footer from "./components/footer/footer";
import LeftSideMenu from "./components/leftSideMenu";
import RightSideMenu from "./components/rightSideMenu";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex gap-8 px-0 py-5 sm:px-8 lg:max-w-3xl xl:max-w-[1400px]">
        <LeftSideMenu />
        <div className="flex-1 min-w-0">
          <Navbar />
          <HeroSection />
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
              <ServicesList />
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
              <EducationList />
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
              <ExperienceList />
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
              <PortfolioContainer />
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
              <TestimonialsList />
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
              <LatestBlogsList />
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
              {/* Liste des blogs */}
              <ContactContainer />
            </section>
          </main>
          <Footer />
        </div>
        <RightSideMenu />
      </div>
    </>
  );
}
