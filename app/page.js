import EducationList from "./components/education/educationList";
import ExperienceList from "./components/experience/experienceList";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ProjectsList from "./components/projects/projectsList";
import ServicesList from "./components/services/servicesList";
import TestimonialsList from "./components/testimonials/testimonialsList";

export default function Home() {
  return (
    <>
      <div className="py-6 grid grid-cols-1 max-w-6xl mx-auto">
        <Navbar />
        <HeroSection />
        <main className="p-6">
          {/* Services */}
          <section className="mt-10 md:mt-12">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3 leading-8">
              My Services
            </h2>
            <p className="text-center text-sm text-slate-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des services */}
            <ServicesList />
          </section>

          {/* Education */}
          <section className="my-24 md:my-28">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3 leading-8">
              Education
            </h2>
            <p className="text-center text-sm text-slate-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des parcours */}
            <EducationList />
          </section>

          {/* Experience */}
          <section className="my-24 md:my-28">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3 leading-8">
              Experience
            </h2>
            <p className="text-center text-sm text-slate-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des expériences */}
            <ExperienceList />
          </section>

          {/* Portfolio */}
          <section className="my-24 md:my-28">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3 leading-8">
              Portfolio
            </h2>
            <p className="text-center text-sm text-slate-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum. Minim mollit non deserunt ullamco est sit aliqua dolor do
              amet.
            </p>
            {/* Portfolio Nav */}
            <nav className="mb-10">
              <ul className="flex flex-col md:flex-row justify-center gap-4">
                <li>
                  <a
                    className="hover:text-indigo-500 active:text-indigo-500"
                    href="#portfolio-all-categories"
                  >
                    All categories
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-indigo-500 active:text-indigo-500"
                    href="#portfolio-ui-design"
                  >
                    UI Design
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-indigo-500 active:text-indigo-500"
                    href="#portfolio-web-templates"
                  >
                    Web Templates
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-indigo-500 active:text-indigo-500"
                    href="#portfolio-logos"
                  >
                    Logos
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-indigo-500 active:text-indigo-500"
                    href="#portfolio-branding"
                  >
                    Branding
                  </a>
                </li>
              </ul>
            </nav>
            {/* Liste des projets */}
            <ProjectsList />
          </section>

          {/* Testimonials */}
          <section className="my-24 md:my-28">
            <h2 className="text-2xl font-bold text-black text-center mb-3 leading-8">
              Testimonials
            </h2>
            <p className="text-center text-sm text-slate-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. Lorem
              ipsum minim mollit non deserunt ullamco est sit aliqua dolor do
              amet.
            </p>
            {/* Liste des testimonials */}
            <TestimonialsList />
          </section>
        </main>
      </div>
    </>
  );
}
