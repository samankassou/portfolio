import EducationItem from "./educationItem";

export default function EducationList() {
  let education = [
    {
      id: 1,
      icon: "logo-html5",
      school: "University of Toronto",
      items: ["Frontend Development", "Backend Development", "CMS Development"],
    },
    {
      id: 2,
      icon: "phone-portrait",
      school: "App Development",
      items: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Development",
      ],
    },
    {
      id: 3,
      icon: "grid",
      school: "UI / UX Design",
      items: [
        "User Research",
        "Wireframing & Visual Design",
        "Prototyping & Testing",
      ],
    },
    {
      id: 4,
      icon: "color-palette",
      school: "Graphics Design",
      items: ["Branding Design", "Social Media Post", "Logo Design"],
    },
    {
      id: 5,
      icon: "film",
      school: "Video Editing",
      items: ["Motion Graphics", "Video Editing", "VFX Editor"],
    },
  ];

  return (
    <ul className="grid gap-4 bg-white shadow-sm p-5 rounded-md divide-y">
      {education &&
        education.map((educationItem) => (
          <li>
            <EducationItem
              educationItem={educationItem}
              key={educationItem.id}
            />
          </li>
        ))}
    </ul>
  );
}
