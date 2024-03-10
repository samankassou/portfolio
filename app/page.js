import Header from "./components/header";
import Navbar from "./components/navbar";
import ServiceCard from "./components/serviceCard";
import AdvertCard from "./components/advertCard";

export default function Home() {
  let sercices = [
    {
      id: 1,
      icon: "logo-html5",
      title: "Web Development",
      items: ["Frontend Development", "Backend Development", "CMS Development"],
    },
    {
      id: 2,
      icon: "phone-portrait",
      title: "App Development",
      items: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Development",
      ],
    },
    {
      id: 3,
      icon: "grid",
      title: "UI / UX Design",
      items: [
        "User Research",
        "Wireframing & Visual Design",
        "Prototyping & Testing",
      ],
    },
    {
      id: 4,
      icon: "color-palette",
      title: "Graphics Design",
      items: ["Branding Design", "Social Media Post", "Logo Design"],
    },
    {
      id: 5,
      icon: "film",
      title: "Video Editing",
      items: ["Motion Graphics", "Video Editing", "VFX Editor"],
    },
  ];
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between xs:p-5 md:p-24">
        <Header />
        {/* Services */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-black text-center mb-3 leading-8">
            My Services
          </h2>
          <p className="text-center text-sm text-gray-500 leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
          {/* Liste des services */}
          <ul>
            {sercices &&
              sercices.map((service) => (
                <li>
                  <ServiceCard service={service} key={service.id} />
                </li>
              ))}
            <li>
              <AdvertCard />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
