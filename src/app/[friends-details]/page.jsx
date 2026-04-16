"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  BellMinus,
  Archive,
  Trash2,
  PhoneCall,
  MessageSquareMore,
  Video,
} from "lucide-react";

const FriendsDetails = () => {
  const params = useParams();
  const friendId = Number(params["friends-details"]);
  const [friends, setFriends] = useState([]);
  const selectedFriend = friends.find(
    (filteredFriend) => filteredFriend.id === friendId,
  );

  useEffect(() => {
    const loadFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
    };

    loadFriends();
  }, []);

  if (!selectedFriend) {
    return <div>Loading...</div>;
  }

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

  return (
    <div className="my-20">
      <div className="grid grid-cols-4 grid-rows-7 gap-5 text-center">
        <div className="bg-white rounded-xl shadow-2xl p-5 row-span-4 flex flex-col items-center space-y-3">
          <Image
            src={selectedFriend.picture}
            alt={selectedFriend.name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>{selectedFriend.name}</div>
          <div
            className={`badge rounded-full border capitalize py-3 text-white ${statusClass}`}
          >
            {selectedFriend.status}
          </div>
          <div className="flex gap-2">
            {selectedFriend.tags.map((tag) => (
              <div key={tag}>
                <p className="badge bg-green-200 text-sm">{tag}</p>
              </div>
            ))}
          </div>
          <div className="text-sm">{selectedFriend.bio}</div>
          <div className="text-sm">{selectedFriend.email}</div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-5 row-span-2">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h3 className="font-semibold text-[30px] text-[#244D3F]">
              {selectedFriend.days_since_contact}
            </h3>
            <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-5 row-span-2">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h3 className="text-[#244D3F] font-semibold text-[30px]">
              {selectedFriend.goal}
            </h3>
            <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-5 row-span-2">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <h3 className="text-[#244D3F] font-semibold text-[30px]">
              {formattedNextDueDate}
            </h3>
            <p className="text-[18px] text-[#64748B]">Next Due</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-5 col-span-3 row-span-2">
          <div className="flex justify-between items-center h-full px-5">
            <div className="text-left">
              <h2 className="text-[#244D3F] text-[20px]">Relationship Goal</h2>
              <p className="text-[18px] text-[#64748B]">
                Contact every{" "}
                <span className="font-bold text-[#1F2937]">
                  {selectedFriend.goal} days
                </span>
              </p>
            </div>
            <button className="btn">Edit</button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-5 col-span-1 row-span-1 cursor-pointer">
          <div className="flex gap-2 justify-center items-center">
            <BellMinus />
            <p className="font-semibold">Snooze 2 weeks</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-6 col-span-3 row-span-3">
          <h2 className="text-lg font-semibold mb-4">Quick Check-In</h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center py-6 cursor-pointer hover:bg-gray-200 transition">
              <PhoneCall className="w-6 h-6 mb-2 text-gray-600" />
              <p className="text-sm text-gray-700">Call</p>
            </div>

            <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center py-6 cursor-pointer hover:bg-gray-200 transition">
              <MessageSquareMore className="w-6 h-6 mb-2 text-gray-600" />
              <p className="text-sm text-gray-700">Text</p>
            </div>

            <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center py-6 cursor-pointer hover:bg-gray-200 transition">
              <Video className="w-6 h-6 mb-2 text-gray-600" />
              <p className="text-sm text-gray-700">Video</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-5 cursor-pointer">
          <div className="flex gap-2 justify-center items-center">
            <Archive />
            <p className="font-semibold">Archive</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-5 cols-span-1 row-span-1 cursor-pointer">
          <div className="flex gap-2 justify-center items-center text-[#EF4444]">
            <Trash2 />
            <p className="font-semibold">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
