import AdvertBtn from "./advertBtn";

export default function AdvertCard() {
  return (
    <div className="bg-primary rounded-xl p-6">
      <h3 className="text-xl font-semibold text-base-content text-center my-4">
        Advertising
      </h3>
      <p className="text-base-content font-normal my-3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-center mt-4">
        <AdvertBtn />
      </p>
    </div>
  );
}
