"use client";
import React, { useEffect, useState } from "react";
import FriendsScoreCard from "./FriendsScoreCard";
import FriendsCard from "./FriendsCard";
import Link from "next/link";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
    };

    loadFriends();
  }, []);

  return (
    <div className="mb-20 space-y-10">
      <FriendsScoreCard friends={friends}></FriendsScoreCard>
      <div className="divider"></div>
      <div className="space-y-5 px-5">
        <h2 className="font-semibold">Your Friends</h2>
        <FriendsCard friends={friends}></FriendsCard>
      </div>
    </div>
  );
};

export default Friends;
