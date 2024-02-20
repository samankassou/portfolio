import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Image
        src="/img/profile_pic_sm.jpg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <ul>
        <li></li>
      </ul>
    </nav>
  );
}
