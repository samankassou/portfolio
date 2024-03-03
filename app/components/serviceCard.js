export default function serviceCard({ service }) {
  return (
    <div className="rounded-box bg-white shadow-sm p-5 my-5">
      <span className="inline-flex items-center justify-center text-2xl text-black p-2 rounded-md bg-gray-100">
        <ion-icon name="code"></ion-icon>
      </span>
      <h3 className="text-md font-bold text-left my-4 leading-8">
        {service.title}
      </h3>
      <ul>
        {service.items &&
          service.items.map((item) => (
            <li
              className="flex items-center space-x-2 text-sm text-gray-500 my-3"
              key={item.title}
            >
              <ion-icon name={item.icon}></ion-icon>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
