import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex bg-[#0f0e17] bg-secondary text-center text-white font-bold text-sm tracking-wider pt-10 pb-5 items-center justify-center">
      © 2023 NSthingy. All Rights Reserved.
      <div className="px-2">T&C</div>
      <div>Privacy</div>
    </footer>
  );
};

export default Footer;
