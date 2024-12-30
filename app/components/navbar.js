import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="mx-4 mb-16 flex items-center justify-between rounded-full bg-base-100 py-3 pl-3 pr-6 xl:hidden">
      <Image
        className="h-10 w-10 rounded-full"
        src="/img/profile_pic_sm.jpg"
        width="0"
        height="0"
        sizes="100vw"
        alt="Picture of the author"
      />
      <ul className="flex justify-between gap-6">
        <li key="one" className="text-2xl text-primary">
          <ion-icon name="color-fill-outline"></ion-icon>
        </li>
        <li key="two" className="text-2xl">
          <ion-icon name="menu"></ion-icon>
        </li>
      </ul>
    </nav>
  );
}
