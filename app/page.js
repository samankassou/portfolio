import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import ServicesList from "./components/services/servicesList";

export default function Home() {
  return (
    <>
      <div className="py-6">
        <Navbar />
        <HeroSection />
        <main className="flex flex-col items-center justify-between xs:p-5 md:p-24">
          {/* Services */}
          <section className="my-10">
            <h2 className="text-2xl font-bold text-black text-center mb-3 leading-8">
              My Services
            </h2>
            <p className="text-center text-sm text-gray-500 leading-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. lorem
              ipsum
            </p>
            {/* Liste des services */}
            <ServicesList />
          </section>
        </main>
      </div>
    </>
  );
}
