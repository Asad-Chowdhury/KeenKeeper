import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
      <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
      <p className="text-sm text-[#64748B]">Loading your connections...</p>
    </div>
  );
};

export default Loading;
