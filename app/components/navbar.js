import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center rounded-full bg-base-100 p-2 mx-4 mb-10">
      <Image
        className="rounded-full"
        src="/img/profile_pic_sm.jpg"
        width={40}
        height={40}
        alt="Picture of the author"
      />
      <ul className="flex justify-between items-center">
        <li className="text-primary  text-2xl">
          <ion-icon name="color-fill"></ion-icon>
        </li>
        <li className="text-primary">
          <ion-icon name="reorder-four"></ion-icon>
        </li>
      </ul>
    </nav>
  );
}
