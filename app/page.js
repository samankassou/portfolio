import EducationList from "./components/education/educationList";
import ExperienceList from "./components/experience/experienceList";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ProjectsList from "./components/projects/projectsList";
import ServicesList from "./components/services/servicesList";

export default function Home() {
  return (
    <>
      <div className="py-6 grid grid-cols-1 max-w-6xl mx-auto">
        <Navbar />
        <HeroSection />
        <main className="grid grid-cols-1 gap-8 p-6">
          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-black text-center mb-3 leading-8">
              My Services
            </h2>
            <p className="text-center text-sm text-gray-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des services */}
            <ServicesList />
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-black text-center mb-3 leading-8">
              Education
            </h2>
            <p className="text-center text-sm text-gray-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des parcours */}
            <EducationList />
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-black text-center mb-3 leading-8">
              Experience
            </h2>
            <p className="text-center text-sm text-gray-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des expériences */}
            <ExperienceList />
          </section>

          {/* Portfolio */}
          <section>
            <h2 className="text-2xl font-bold text-black text-center mb-3 leading-8">
              Portfolio
            </h2>
            <p className="text-center text-sm text-gray-500 leading-6 mb-10 max-w-md mx-auto">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des projets */}
            <ProjectsList />
          </section>
        </main>
      </div>
    </>
  );
}
