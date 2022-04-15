import Head from "next/head";
import Image from "next/image";
import SignInButton from "./SignInButton";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="text-black">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-36 py-2 z-50 bg-white/60 backdrop-blur-sm">
        <h2 className="font-semibold text-2xl">
          <span className="text-black">git</span>
          <span className="text-medium_sea_green">win</span>
        </h2>
        <SignInButton />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
