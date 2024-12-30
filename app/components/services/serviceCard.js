export default function ServiceCard({ service }) {
  return (
    <div className="grid grid-cols-1 gap-2.5 rounded-xl bg-base-100 p-6">
      <div className="mb-8">
        <span className="inline-flex items-center rounded-xl bg-base-200 p-4 text-[32px] text-base-content">
          <ion-icon name={service.icon}></ion-icon>
        </span>
      </div>
      <div>
        <h3 className="mb-6 text-xl font-semibold text-base-content">
          {service.title}
        </h3>
        <ul>
          {service.items &&
            service.items.map((item) => (
              <li
                className="my-3 flex items-center space-x-2 text-sm text-secondary text-opacity-60"
                key={item.id}
              >
                <ion-icon key={item.id} name="arrow-forward"></ion-icon>
                <span key={item.id}>{item}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
