export default function ServiceCard({ service }) {
  return (
    <div className="grid grid-cols-1 gap-3 bg-base-100 p-6 rounded-xl">
      <div>
        <span className="inline-flex items-center justify-center text-2xl text-base-content p-2 rounded-md bg-base-200">
          <ion-icon name={service.icon}></ion-icon>
        </span>
      </div>
      <div>
        <h3 className="text-xl font-semibold my-4 leading-6 text-base-content">
          {service.title}
        </h3>
        <ul>
          {service.items &&
            service.items.map((item) => (
              <li
                className="flex items-center space-x-2 text-sm text-secondary text-opacity-60 my-3"
                key={item.id}
              >
                <ion-icon name="arrow-round-forward"></ion-icon>
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
