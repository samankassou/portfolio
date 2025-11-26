export default function CVDownloadButton() {
  return (
    <div className="p-8">
      <a
        href="/files/cv.pdf"
        download
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600 dark:hover:bg-primary-600"
      >
        <span>Download My CV</span>
        <span className="text-base">
          <ion-icon name="download-outline"></ion-icon>
        </span>
      </a>
    </div>
  );
}
