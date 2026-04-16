"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Archive,
  BellMinus,
  MessageSquareMore,
  PhoneCall,
  Trash2,
  Video,
} from "lucide-react";
import { toast } from "react-toastify";
import {
  addTimelineLog,
  getGoalForFriend,
  updateGoalForFriend,
} from "@/lib/interactionStorage";

const FriendsDetails = () => {
  const params = useParams();
  const router = useRouter();
  const friendId = Number(params["friends-details"]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const loadFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
    };

    loadFriends();
  }, []);

  const selectedFriend = friends.find(
    (filteredFriend) => filteredFriend.id === friendId,
  );

  if (!selectedFriend) {
    return <div className="px-5 py-10">Loading...</div>;
  }

  const currentGoal = getGoalForFriend(selectedFriend.id, selectedFriend.goal);
  const statusClass =
    selectedFriend.status === "almost due"
      ? "bg-orange-400 border-orange-200"
      : selectedFriend.status === "overdue"
        ? "bg-red-800 border-red-200"
        : "bg-green-800 border-green-200";
  const formattedNextDueDate = new Date(
    selectedFriend.next_due_date,
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleAddTimelineLog = (type) => {
    const newLog = addTimelineLog({
      friendId: selectedFriend.id,
      friendName: selectedFriend.name,
      type,
    });
    const successMessage = `${newLog.title} added to timeline`;

    toast.success(successMessage);

    window.setTimeout(() => {
      router.push("/timeline");
    }, 700);
  };

  const handleEditGoal = () => {
    const updatedGoal = window.prompt(
      `Set a new contact goal in days for ${selectedFriend.name}`,
      String(currentGoal),
    );

    if (!updatedGoal) {
      return;
    }

    const parsedGoal = Number(updatedGoal);

    if (!Number.isFinite(parsedGoal) || parsedGoal <= 0) {
      toast.error("Please enter a valid number of days.");
      return;
    }

    updateGoalForFriend(selectedFriend.id, parsedGoal);
    setFriends((currentFriends) =>
      currentFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, goal: parsedGoal }
          : friend,
      ),
    );
    toast.success(`Goal updated to every ${parsedGoal} days.`);
  };

  return (
    <div className="my-20 px-5">
      <div className="grid gap-5 lg:grid-cols-4 lg:grid-rows-7">
        <div className="flex flex-col items-center space-y-3 rounded-xl bg-white p-5 text-center shadow-2xl lg:row-span-4">
          <Image
            src={selectedFriend.picture}
            alt={selectedFriend.name}
            width={96}
            height={96}
            className="rounded-full"
          />
          <div className="text-xl font-semibold text-slate-800">
            {selectedFriend.name}
          </div>
          <div
            className={`badge rounded-full border px-4 py-3 capitalize text-white ${statusClass}`}
          >
            {selectedFriend.status}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {selectedFriend.tags.map((tag) => (
              <p key={tag} className="badge bg-green-200 text-sm">
                {tag}
              </p>
            ))}
          </div>
          <div className="text-sm leading-6 text-slate-500">
            {selectedFriend.bio}
          </div>
          <div className="text-sm text-slate-500">{selectedFriend.email}</div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-2xl lg:row-span-2">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h3 className="text-[30px] font-semibold text-[#244D3F]">
              {selectedFriend.days_since_contact}
            </h3>
            <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-2xl lg:row-span-2">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h3 className="text-[30px] font-semibold text-[#244D3F]">
              {currentGoal}
            </h3>
            <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-2xl lg:row-span-2">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h3 className="text-[30px] font-semibold text-[#244D3F]">
              {formattedNextDueDate}
            </h3>
            <p className="text-[18px] text-[#64748B]">Next Due</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-2xl lg:col-span-3 lg:row-span-2">
          <div className="flex h-full flex-col justify-between gap-4 text-left md:flex-row md:items-center">
            <div>
              <h2 className="text-[20px] text-[#244D3F]">Relationship Goal</h2>
              <p className="text-[18px] text-[#64748B]">
                Contact every{" "}
                <span className="font-bold text-[#1F2937]">
                  {currentGoal} days
                </span>
              </p>
            </div>
            <button type="button" className="btn" onClick={handleEditGoal}>
              Edit
            </button>
          </div>
        </div>

        <div className="cursor-pointer rounded-xl bg-white p-5 shadow-2xl lg:col-span-1 lg:row-span-1">
          <div className="flex items-center justify-center gap-2">
            <BellMinus />
            <p className="font-semibold">Snooze 2 weeks</p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-2xl lg:col-span-3 lg:row-span-3">
          <h2 className="mb-4 text-lg font-semibold">Quick Check-In</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => handleAddTimelineLog("call")}
              className="btn flex h-full flex-col items-center justify-center rounded-lg bg-gray-100 py-6"
            >
              <PhoneCall className="mb-2 h-6 w-6 text-gray-600" />
              <p className="text-sm text-gray-700">Call</p>
            </button>

            <button
              type="button"
              onClick={() => handleAddTimelineLog("text")}
              className="btn flex h-full flex-col items-center justify-center rounded-lg bg-gray-100 py-6"
            >
              <MessageSquareMore className="mb-2 h-6 w-6 text-gray-600" />
              <p className="text-sm text-gray-700">Text</p>
            </button>

            <button
              type="button"
              onClick={() => handleAddTimelineLog("video")}
              className="btn flex h-full flex-col items-center justify-center rounded-lg bg-gray-100 py-6"
            >
              <Video className="mb-2 h-6 w-6 text-gray-600" />
              <p className="text-sm text-gray-700">Video</p>
            </button>
          </div>
        </div>

        <div className="cursor-pointer rounded-xl bg-white p-5 shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            <Archive />
            <p className="font-semibold">Archive</p>
          </div>
        </div>

        <div className="cursor-pointer rounded-xl bg-white p-5 shadow-2xl">
          <div className="flex items-center justify-center gap-2 text-[#EF4444]">
            <Trash2 />
            <p className="font-semibold">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
