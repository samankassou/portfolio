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
    <ul className="grid gap-4 bg-white shadow-sm p-5 rounded-md divide-y">
      {education &&
        education.map((educationItem) => (
          <li key={educationItem.id}>
            <EducationItem educationItem={educationItem} />
          </li>
        ))}
    </ul>
  );
}
