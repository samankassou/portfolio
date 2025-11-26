import ProfileSection from "./leftSideMenu/profileSection";
import SocialLinks from "./leftSideMenu/socialLinks";
import ContactInfo from "./leftSideMenu/contactInfo";
import MajorSkills from "./leftSideMenu/majorSkills";
import ExtraSkills from "./leftSideMenu/extraSkills";
import CVDownloadButton from "./leftSideMenu/cvDownloadButton";

export default function LeftSideMenu() {
  const profileData = {
    name: "Foulla",
    title: "Product Developer",
    photo: "/img/profile_pic_sm.jpg",
    badge: true,
  };

  const socialLinks = [
    { id: 1, icon: "logo-facebook", url: "#", label: "Facebook" },
    { id: 2, icon: "logo-twitter", url: "#", label: "Twitter" },
    { id: 3, icon: "logo-instagram", url: "#", label: "Instagram" },
    { id: 4, icon: "logo-linkedin", url: "#", label: "LinkedIn" },
    { id: 5, icon: "logo-youtube", url: "#", label: "YouTube" },
    { id: 6, icon: "logo-github", url: "#", label: "GitHub" },
  ];

  const contactInfo = [
    { id: 1, label: "Email", value: "info@example.com" },
    { id: 2, label: "Phone", value: "+1 234 567 890" },
    { id: 3, label: "Residence", value: "Your Country" },
    { id: 4, label: "City", value: "Your City" },
    { id: 5, label: "Age", value: "24 Years" },
    { id: 6, label: "Freelance", value: "Available", highlight: true },
    { id: 7, label: "Language", value: "French, English" },
  ];

  const majorSkills = [
    { id: 1, name: "Html", percentage: 90 },
    { id: 2, name: "CSS", percentage: 95 },
    { id: 3, name: "UI Design", percentage: 95 },
    { id: 4, name: "JavaScript", percentage: 70 },
    { id: 5, name: "WordPress", percentage: 80 },
  ];

  const extraSkills = [
    { id: 1, name: "Bootstrap" },
    { id: 2, name: "Materialize" },
    { id: 3, name: "Sass" },
    { id: 4, name: "Stylus" },
    { id: 5, name: "Less" },
    { id: 6, name: "Gulp" },
    { id: 7, name: "Grunt" },
    { id: 8, name: "Git Knowledge" },
    { id: 9, name: "Webpack" },
  ];

  return (
    <aside className="hidden w-[280px] xl:block">
      <div className="sticky top-8 space-y-0 divide-y divide-secondary/10 overflow-hidden rounded-2xl bg-base-100 dark:divide-base-800 dark:bg-[#1C1C1C]">
        <ProfileSection data={profileData} />
        <SocialLinks links={socialLinks} />
        <ContactInfo contacts={contactInfo} />
        <MajorSkills skills={majorSkills} />
        <ExtraSkills skills={extraSkills} />
        <CVDownloadButton />
      </div>
    </aside>
  );
}
