export default function ServiceCard({ service }) {
  return (
    <div className="grid grid-cols-1 gap-2.5 bg-base-100 p-6 rounded-xl">
      <div className="mb-8">
        <span className="text-[32px] inline-flex items-center text-base-content p-4 rounded-xl bg-base-200">
          <ion-icon name={service.icon}></ion-icon>
        </span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-base-content mb-6">
          {service.title}
        </h3>
        <ul>
          {service.items &&
            service.items.map((item) => (
              <li
                className="flex items-center space-x-2 text-sm text-secondary text-opacity-60 my-3"
                key={item.id}
              >
                <ion-icon name="arrow-forward"></ion-icon>
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
