import React from "react";
import FriendsScoreCard from "./FriendsScoreCard";
import FriendsCard from "./FriendsCard";

const Friends = () => {
  return (
    <div>
      <FriendsScoreCard></FriendsScoreCard>
      <div className="divider"></div>
      <h2 className="font-semibold">Your Friend</h2>
      <FriendsCard></FriendsCard>
    </div>
  );
};

export default Friends;
