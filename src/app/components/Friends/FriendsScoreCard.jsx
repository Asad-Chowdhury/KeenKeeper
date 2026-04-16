import React from "react";

const FriendsScoreCard = () => {
  return (
    <div className=" grid sm: grid-cols-2 lg:grid-cols-4 gap-5 px-5 text-center">
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">10</h2>
        <p className="text-[18px] text-[#64748B]">Total Friends</p>
      </div>
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">3</h2>
        <p className="text-[18px] text-[#64748B]">On Track</p>
      </div>
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">6</h2>
        <p className="text-[18px] text-[#64748B]">Need Attention</p>
      </div>
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">12</h2>
        <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default FriendsScoreCard;
