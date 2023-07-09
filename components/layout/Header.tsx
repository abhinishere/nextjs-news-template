import Search from "@/public/icons/Search";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  return (
    <header

    // className="bg-[#051236] bg-secondary h-14 top-0 flex justify-between items-center z-20 py-10 lg:px-40 w-full"
    >
      <div className="bg-[#0f0e17] bg-secondary hidden md:flex md:text-2xl text-white font-extrabold pb-10 w-full mx-auto border-b items-center justify-between py-10 md:px-[10%] lg:px-[20%] select-none">
        <Link key="home" href="/" className="text-xl " aria-label="home">
          Home
        </Link>
        <Link key="news" href="/news" className="text-xl " aria-label="news">
          News
        </Link>
        <Link key="NSt" href="/" className="text-4xl " aria-label="VR thingy">
          NSt
        </Link>
        <Link key="about" href="/about" className="text-xl " aria-label="about">
          About
        </Link>
        <Link
          key="search"
          href="/search"
          className="text-xl "
          aria-label="search"
        >
          Search
        </Link>
      </div>
      <div className="md:hidden bg-[#0f0e17] bg-secondary text-white text-center pt-5 select-none">
        <Link
          href="/"
          className="text-4xl font-extrabold py-5"
          aria-label="VR thingy"
        >
          NSt
        </Link>
        <div className="flex justify-between text-lg font-extrabold px-[10%] py-5 select-none">
          <Link href="/" className="headerLink" aria-label="Home">
            Home
          </Link>
          <Link href="/news" className="headerLink" aria-label="News">
            News
          </Link>
          <Link href="/about" className="headerLink" aria-label="About">
            About
          </Link>
          <Link href="/search" className="headerLink" aria-label="Search">
            Search
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
