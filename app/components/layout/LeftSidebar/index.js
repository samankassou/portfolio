import ProfileSection from "./ProfileSection";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import SkillsSection from "./SkillsSection";
import CVDownloadButton from "./CVDownloadButton";
import { profileData, contactInfo, majorSkills, extraSkills } from "@/lib/data/profile";
import { socialLinks } from "@/lib/data/siteConfig";
import { COMMON_CLASSES } from "@/lib/constants/colors";

export default function LeftSidebar() {
  return (
    <aside className="hidden w-[280px] xl:block">
      <div
        className={`sticky top-8 space-y-0 divide-y overflow-hidden rounded-2xl ${COMMON_CLASSES.CARD_BG} ${COMMON_CLASSES.DIVIDER}`}
      >
        <ProfileSection data={profileData} />
        <SocialLinks links={socialLinks} />
        <ContactInfo contacts={contactInfo} />
        <SkillsSection majorSkills={majorSkills} extraSkills={extraSkills} />
        <CVDownloadButton />
      </div>
    </aside>
  );
}
