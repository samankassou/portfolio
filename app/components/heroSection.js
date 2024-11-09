import Btn from "./btn";
export default function HeroSection() {
  return (
    <div className="rounded-box bg-white shadow-sm p-8 my-5 mx-5">
      <h1 className="text-2xl font-bold text-black text-center mb-3 leading-8">
        I design products that delight and inspire people.
      </h1>
      <p className="text-center text-sm text-gray-500 leading-6 px-1">
        A Product Designer and Visual Developer in SF. I specialize in UI/UX
        Design, Responsive Web Design, and Visual Development.
      </p>
      <p className="text-center pt-4 mt-2">
        <Btn />
      </p>
    </div>
  );
}
