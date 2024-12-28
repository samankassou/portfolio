import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center rounded-full bg-base-100 py-3 pr-6 pl-3 mx-4 mb-16">
      <Image
        className="rounded-full w-10 h-10"
        src="/img/profile_pic_sm.jpg"
        width="0"
        height="0"
        sizes="100vw"
        alt="Picture of the author"
      />
      <ul className="flex justify-between gap-6">
        <li className="text-primary text-2xl">
          <ion-icon name="color-fill-outline"></ion-icon>
        </li>
        <li className="text-2xl">
          <ion-icon name="menu"></ion-icon>
        </li>
      </ul>
    </nav>
  );
}
