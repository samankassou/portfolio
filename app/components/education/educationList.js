import EducationItem from "./educationItem";

export default function EducationList() {
  let education = [
    {
      id: 1,
      school: "University of Toronto",
      role: "Student",
      certificate: "Certificate of training",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
        tempor incididunt ut labore et dolore , consectetur adipiscing elit.",
    },
    {
      id: 2,
      school: "University of Toronto",
      role: "Student",
      certificate: "Certificate of training",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
        tempor incididunt ut labore et dolore , consectetur adipiscing elit.",
    },
    {
      id: 3,
      school: "University of Toronto",
      role: "Student",
      certificate: "Certificate of training",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
        tempor incididunt ut labore et dolore , consectetur adipiscing elit.",
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
