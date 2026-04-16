"use client";

import React, { useMemo, useState } from "react";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import { getTimelineLogs } from "@/lib/interactionStorage";

const actionConfig = {
  call: {
    label: "Call",
    icon: PhoneCall,
  },
  text: {
    label: "Text",
    icon: MessageSquareMore,
  },
  video: {
    label: "Video",
    icon: Video,
  },
};

const filterOptions = [
  { value: "all", label: "All interactions" },
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "video", label: "Video" },
];

const TimelinePage = () => {
  const [logs] = useState(() => getTimelineLogs());
  const [filter, setFilter] = useState("all");

  const filteredLogs = useMemo(() => {
    if (filter === "all") {
      return logs;
    }

    return logs.filter((log) => log.type === filter);
  }, [filter, logs]);

  return (
    <div className="space-y-8 px-5 py-10">
      <div className="space-y-5">
        <h1 className="text-5xl font-bold text-slate-800">Timeline</h1>

        <div className="w-full max-w-xs">
          <select
            className="select w-full rounded-2xl border border-slate-200 bg-white"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!filteredLogs.length ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-500 shadow-sm">
          No timeline entries found for this filter yet.
        </div>
      ) : (
        <div className="space-y-5">
          {filteredLogs.map((log) => {
            const config = actionConfig[log.type] || actionConfig.text;
            const Icon = config.icon;
            const formattedDate = new Date(log.date).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            );

            return (
              <div
                key={log.id}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <Icon className="h-6 w-6 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-2xl text-slate-800">{log.title}</h3>
                  <p className="text-lg text-slate-500">{formattedDate}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
