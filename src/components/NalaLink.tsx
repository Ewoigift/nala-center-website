import React from "react";
import Link from "next/link";

interface NalaLinkProps {
  href: string;
  children: React.ReactNode;
}

const NalaLink: React.FC<NalaLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
};

export default NalaLink;
