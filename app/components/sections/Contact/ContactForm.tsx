import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

export default function ContactForm() {
  return (
    <form
      className={cn("rounded-xl p-6 shadow-sm", COMMON_CLASSES.CARD_BG)}
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
            className={cn("block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary", COMMON_CLASSES.INPUT_BG, COMMON_CLASSES.TEXT)}
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
            className={cn("block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary", COMMON_CLASSES.INPUT_BG, COMMON_CLASSES.TEXT)}
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
            className={cn("block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary", COMMON_CLASSES.INPUT_BG, COMMON_CLASSES.TEXT)}
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
            className={cn("block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary md:h-44", COMMON_CLASSES.INPUT_BG, COMMON_CLASSES.TEXT)}
            rows={5}
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="rounded-lg bg-primary px-5 py-3 font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base-100 dark:focus:ring-offset-[#1C1C1C]"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
