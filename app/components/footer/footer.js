export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rounded-xl bg-base-100 px-6 py-5 mt-10 mx-6">
      <p className="text-base-content font-normal leading-4 text-center">
        © {currentYear} Foulla SAMANKASSOU. All rights reserved.
      </p>
    </footer>
  );
}
