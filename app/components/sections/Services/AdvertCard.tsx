import AdvertBtn from "./AdvertBtn";

export default function AdvertCard() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-600 p-8 text-center">
      <h3 className="mb-4 text-xl font-semibold text-base-content">
        Advertising
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-base-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <AdvertBtn />
    </div>
  );
}
