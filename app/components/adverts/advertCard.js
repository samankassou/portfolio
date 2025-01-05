import AdvertBtn from "./advertBtn";

export default function AdvertCard() {
  return (
    <div className="rounded-xl bg-primary p-6">
      <h3 className="my-4 text-center text-xl font-semibold text-base-content">
        Advertising
      </h3>
      <p className="my-3 text-center font-normal text-base-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="mt-4 text-center">
        <AdvertBtn />
      </p>
    </div>
  );
}
