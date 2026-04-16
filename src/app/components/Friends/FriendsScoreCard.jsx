import React from "react";

const FriendsScoreCard = ({ friends = [] }) => {
  const onTrackFriends = friends.reduce((total, friend) => {
    return friend.status === "on-track" ? total + 1 : total;
  }, 0);

  const interactionThisMonth = friends.reduce((total, friend) => {
    return friend.days_since_contact <= 30 ? total + 1 : total;
  }, 0);

  return (
    <div className=" grid sm: grid-cols-2 lg:grid-cols-4 gap-5 px-5 text-center">
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">{friends.length}</h2>
        <p className="text-[18px] text-[#64748B]">Total Friends</p>
      </div>
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">{onTrackFriends}</h2>
        <p className="text-[18px] text-[#64748B]">On Track</p>
      </div>
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">
          {friends.length - onTrackFriends}
        </h2>
        <p className="text-[18px] text-[#64748B]">Need Attention</p>
      </div>
      <div className="p-8 bg-white shadow-xl">
        <h2 className="font-semibold text-[32px]">{interactionThisMonth}</h2>
        <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default FriendsScoreCard;
