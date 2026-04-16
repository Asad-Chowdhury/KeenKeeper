import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="max-w-7xl m-auto flex flex-col space-y-10">
      <h1 className="text-7xl font-extrabold text-center underline text-[#244D3F]">
        404
      </h1>
      <h2 className="text-5xl font-bold">Page Not found</h2>
      <button className="btn bg-[#244D3F] text-white rounded-2xl">
        <Link href={"/"}>Back to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
