import ProfileSection from "./ProfileSection";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import CategorizedSkillsSection from "./CategorizedSkillsSection";
import LanguagesSection from "./LanguagesSection";
import CVDownloadButton from "./CVDownloadButton";
import { profileData, contactInfo, skillCategories } from "@/lib/data/profile";
import { languages } from "@/lib/data/languages";
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
        <CategorizedSkillsSection skillCategories={skillCategories} />
        <LanguagesSection languages={languages} />
        <CVDownloadButton />
      </div>
    </aside>
  );
}
