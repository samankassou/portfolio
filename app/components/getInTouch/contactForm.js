export default function ContactForm() {
  return (
    <form className="bg-white shadow-sm p-6 rounded-xl">
      <h3 className="text-xl font-bold text-left mb-6 text-base-content">
        Leave a message
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-normal leading-5 text-base-content">
            Name
          </label>
          <input className="w-full py-3 px-4 bg-base-200 text-base-content text-sm rounded-lg focus:ring-primary focus:border-primary block" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-normal leading-5 text-base-content">
            Email
          </label>
          <input className="w-full py-3 px-4 bg-base-200 text-base-content text-sm rounded-lg focus:ring-primary focus:border-primary block" />
        </div>
        <div className="lg:col-span-2">
          <label className="block mb-2 text-sm font-normal leading-5 text-base-content">
            Subject
          </label>
          <input className="w-full py-3 px-4 bg-base-200 text-base-content text-sm rounded-lg focus:ring-primary focus:border-primary block" />
        </div>
        <div className="lg:col-span-2">
          <label className="block mb-2 text-sm font-normal leading-5 text-base-content">
            Message
          </label>
          <textarea
            className="w-full py-3 px-4 bg-base-200 text-base-content text-sm rounded-lg focus:ring-primary focus:border-primary block"
            rows="5"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary text-base-content font-medium leading-6 rounded-lg py-3 px-5"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
