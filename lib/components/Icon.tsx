/**
 * Icon component - Maps Ionicons names to React Icons
 * Replaces ion-icon web components with tree-shakeable SVG icons
 */

import {
  IoMenu,
  IoClose,
  IoRibbonOutline,
  IoArrowForward,
  IoArrowBack,
  IoArrowUp,
  IoMail,
  IoMap,
  IoTabletPortrait,
  IoStar,
  IoStarHalf,
  IoStarOutline,
  IoAddOutline,
  IoDownloadOutline,
  IoContrastOutline,
  IoMoonOutline,
  IoSunnyOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoHome,
  IoGrid,
  IoSchool,
  IoBriefcase,
  IoFolder,
  IoChatbubbles,
  IoNewspaper,
  IoNewspaperOutline,
  IoBarChart,
  IoCloud,
  IoBulb,
  IoCodeSlash,
  IoGitBranch,
  IoSnow,
  IoSnowOutline,
  IoGiftOutline,
  IoCalendarOutline,
  IoTimeOutline,
  IoPersonOutline,
} from "react-icons/io5";

/**
 * Icon name to component mapping
 */
const iconMap = {
  // Navigation
  menu: IoMenu,
  close: IoClose,
  home: IoHome,
  grid: IoGrid,
  school: IoSchool,
  briefcase: IoBriefcase,
  folder: IoFolder,
  chatbubbles: IoChatbubbles,
  newspaper: IoNewspaper,
  "newspaper-outline": IoNewspaperOutline,
  mail: IoMail,

  // Theme icons
  "contrast-outline": IoContrastOutline,
  "moon-outline": IoMoonOutline,
  "sunny-outline": IoSunnyOutline,

  // Social icons
  "logo-linkedin": IoLogoLinkedin,
  "logo-github": IoLogoGithub,

  // Action icons
  "arrow-forward": IoArrowForward,
  "arrow-back": IoArrowBack,
  "arrow-up": IoArrowUp,
  "add-outline": IoAddOutline,
  "download-outline": IoDownloadOutline,

  // Service icons
  "bar-chart": IoBarChart,
  cloud: IoCloud,
  bulb: IoBulb,
  "code-slash": IoCodeSlash,
  "git-branch": IoGitBranch,

  // Other icons
  "ribbon-outline": IoRibbonOutline,
  map: IoMap,
  "tablet-portrait": IoTabletPortrait,
  star: IoStar,
  "star-half-outline": IoStarHalf,
  "star-outline": IoStarOutline,

  // Blog/Time icons
  "calendar-outline": IoCalendarOutline,
  "time-outline": IoTimeOutline,
  "person-outline": IoPersonOutline,

  // Christmas icons
  snow: IoSnow,
  "snow-outline": IoSnowOutline,
  "gift-outline": IoGiftOutline,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number | string;
  "aria-label"?: string;
}

/**
 * Icon component
 * @param name - Icon name from Ionicons
 * @param className - Additional CSS classes
 * @param size - Icon size (default: inherits from parent)
 * @param aria-label - Accessibility label
 */
export default function Icon({ name, className, size, ...props }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }

  return <IconComponent className={className} size={size} {...props} />;
}
