export default function ContactForm() {
  return (
    <form className="rounded-xl bg-white p-6 shadow-sm" id="contact">
      <h3 className="mb-6 text-left text-xl font-bold text-base-content">
        Leave a message
      </h3>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="lg:col-span-1">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-normal leading-5 text-base-content"
          >
            Name
          </label>
          <input
            id="name"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="email"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-normal leading-5 text-base-content"
          >
            Subject
          </label>
          <input
            id="subject"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-normal leading-5 text-base-content"
          >
            Message
          </label>
          <textarea
            id="message"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary md:h-44"
            resize="none"
            rows="5"
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="rounded-lg bg-primary px-5 py-3 font-medium text-base-content"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
