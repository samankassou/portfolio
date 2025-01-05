export default function ContactForm() {
  return (
    <form
      className="rounded-xl bg-white p-6 shadow-sm dark:bg-[#1C1C1C]"
      id="contact"
    >
      <h3 className="mb-6 text-left text-xl font-bold text-base-content dark:text-base-100">
        Leave a message
      </h3>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-normal text-base-content dark:text-base-100"
          >
            Name
          </label>
          <input
            id="name"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary dark:bg-[#131313] dark:text-base-100"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-normal text-base-content dark:text-base-100"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary dark:bg-[#131313] dark:text-base-100"
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-normal leading-5 text-base-content dark:text-base-100"
          >
            Subject
          </label>
          <input
            id="subject"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary dark:bg-[#131313] dark:text-base-100"
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-normal leading-5 text-base-content dark:text-base-100"
          >
            Message
          </label>
          <textarea
            id="message"
            className="block w-full rounded-lg bg-base-200 px-4 py-3 text-sm text-base-content focus:border-primary focus:ring-primary md:h-44 dark:bg-[#131313] dark:text-base-100"
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
