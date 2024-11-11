import AdvertBtn from "./advertBtn";

export default function AdvertCard() {
  return (
    <div className="bg-indigo-500 rounded-lg shadow-sm p-5">
      <h3 className="text-xl font-extrabold text-black text-center my-4 leading-8">
        Advertising
      </h3>
      <p className="text-sm text-black my-3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-center mt-4">
        <AdvertBtn />
      </p>
    </div>
  );
}
