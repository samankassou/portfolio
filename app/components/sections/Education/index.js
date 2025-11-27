import EducationItem from "./EducationItem";

export default function Education() {
  let education = [
    {
      id: 1,
      school: "University of Toronto",
      role: "Student",
      certificate: "Certificate of training",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      id: 2,
      school: "University of Toronto",
      role: "Student",
      certificate: "Certificate of training",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      id: 3,
      school: "University of Toronto",
      role: "Student",
      certificate: "Certificate of training",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
  ];

  return (
    <ul className="grid grid-cols-1 gap-6 md:gap-8">
      {education &&
        education.map((educationItem) => (
          <li key={educationItem.id}>
            <EducationItem
              key={educationItem.id}
              educationItem={educationItem}
            />
          </li>
        ))}
    </ul>
  );
}
