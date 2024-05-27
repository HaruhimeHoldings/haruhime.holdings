import Link from "next/link";
import React from "react";
import { SiCodepen, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
        <title>Haruhime Holdings</title>
      <MyLinks />
      <OutlineButton onClick={() => window.open("https://github.com/HaruhimeHoldings/")}>
        Github
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-orange-300 transition-colors"
      href="https://www.github.com/HaruhimeHoldings"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
      {/*
          <Link
      className="text-zinc-300 hover:text-orange-300 transition-colors"
      href="https://www.x.com"
      target="_blank"
      rel="nofollow"
    >
      <SiX />
    </Link>
    */}
  </div>
);
