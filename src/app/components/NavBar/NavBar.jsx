"use client";
import React from "react";
import { House, Clock4, ChartLine } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col sm:flex-row justify-between px-20 py-4 items-center gap-5">
      <div>
        <h2 className="text-[24px] font-bold">
          Keen<span className="text-[#244D3F] font-semibold">Keeper</span>
        </h2>
      </div>
      <div className="flex gap-5 text-[#64748B] text-[16px]">
        <Link
          href={"/"}
          className={`flex justify-center items-center gap-2 px-4 py-3 rounded-xl link ${pathname === "/" ? "active" : ""}`}
        >
          <House /> <span>Home</span>
        </Link>

        <Link
          href={"/timeline"}
          className={`flex justify-center items-center gap-2 px-4 py-3 rounded-xl link ${pathname === "/timeline" ? "active" : ""}`}
        >
          <Clock4 />
          <span>Timeline</span>
        </Link>
        <Link
          href={"/stats"}
          className={`flex justify-center items-center gap-2 px-4 py-3 rounded-xl link ${pathname === "/stats" ? "active" : ""}`}
        >
          <ChartLine />
          <span>Stats</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
