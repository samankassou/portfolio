export default function Btn() {
  return (
    <a
      href="#"
      className="bg-indigo-500 p-1 text-gray-50 rounded-full inline-flex justify-between items-center space-x-2"
    >
      <span className="pl-5 pr-2 text-slate-900">Let’s Talk</span>
      <span className="bg-slate-900 p-2 rounded-full flex items-center justify-center text-indigo-500">
        <ion-icon name="arrow-round-forward"></ion-icon>
      </span>
    </a>
  );
}
