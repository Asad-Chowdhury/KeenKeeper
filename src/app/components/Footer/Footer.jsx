import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-20">
      <div className="max-w-7xl m-auto space-y-6">
        <div className="flex flex-col justify-center items-center space-y-4 px-5">
          <Image src="/logo-xl.png" alt="logo" width={412} height={61} />
          <p className="text-white text-[16px] font-light">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-white text-[20px]">Social Links</h3>
          <div className="flex gap-2">
            <Image
              src="/instagram.png"
              alt="instagram-logo"
              width={40}
              height={40}
            />
            <Image
              src="/facebook.png"
              alt="facebook-logo"
              width={40}
              height={40}
            />
            <Image
              src="/twitter.png"
              alt="twitter-logo"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="divider before:border-[#1A8862] after:border-[#1A8862]"></div>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between px-5">
          <p className="text-[#FAFAFA] text-[16px]">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="text-[#FAFAFA] text-[16px] flex gap-5 text-center">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
