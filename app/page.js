import Header from "./components/header";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between xs:p-5 md:p-24">
        <Header />
      </main>
    </>
  );
}
