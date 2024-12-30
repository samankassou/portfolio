import ServiceCard from "./serviceCard";
import AdvertCard from "./../adverts/advertCard";

export default function ServicesList() {
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
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {sercices &&
        sercices.map((service) => (
          <li key={service.id}>
            <ServiceCard key={service.id} service={service} />
          </li>
        ))}
      <AdvertCard key="adverd-card" />
    </ul>
  );
}
