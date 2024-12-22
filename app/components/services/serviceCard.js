export default function ServiceCard({ service }) {
  return (
    <div className="bg-white shadow-sm p-5 rounded-md">
      <span className="inline-flex items-center justify-center text-2xl text-slate-900 p-2 rounded-md bg-gray-100">
        <ion-icon name={service.icon}></ion-icon>
      </span>
      <h3 className="text-xl font-extrabold text-left my-4 leading-8 text-slate-900">
        {service.title}
      </h3>
      <ul>
        {service.items &&
          service.items.map((item) => (
            <li
              className="flex items-center space-x-2 text-sm text-gray-500 my-3"
              key={item.id}
            >
              <ion-icon name="arrow-round-forward"></ion-icon>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
