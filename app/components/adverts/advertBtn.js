export default function AdvertBtn() {
  return (
    <a
      href="#"
      className="bg-base-content py-2.5 px-4 rounded-lg inline-flex justify-between items-center gap-2"
    >
      <span className="text-primary uppercase text-sm">Order now</span>
      <span className="bg-base-content flex items-center justify-center text-primary">
        <ion-icon name="arrow-forward"></ion-icon>
      </span>
    </a>
  );
}
