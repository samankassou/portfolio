export default function advertBtn() {
  return (
    <a
      href="#"
      className="bg-black p-3 rounded-lg inline-flex justify-between items-center space-x-2"
    >
      <span className="text-indigo-500 uppercase text-sm">Order now</span>
      <span className="bg-black flex items-center justify-center text-indigo-500">
        <ion-icon name="arrow-round-forward"></ion-icon>
      </span>
    </a>
  );
}
