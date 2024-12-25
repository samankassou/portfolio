export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 mt-12 rounded-xl bg-base-100">
      <p className="text-sm text-base-content text-center">
        © {currentYear} Foulla SAMANKASSOU. All rights reserved.
      </p>
    </footer>
  );
}
