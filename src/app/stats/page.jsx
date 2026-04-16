"use client";

import React, { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { getTimelineLogs } from "@/lib/interactionStorage";

const chartColors = {
  call: "#2F855A",
  text: "#3182CE",
  video: "#DD6B20",
};

const StatsPage = () => {
  const [logs] = useState(() => getTimelineLogs());

  const chartData = useMemo(() => {
    const totals = logs.reduce(
      (summary, log) => ({
        ...summary,
        [log.type]: (summary[log.type] || 0) + 1,
      }),
      { call: 0, text: 0, video: 0 },
    );

    return [
      { name: "Call", value: totals.call, color: chartColors.call },
      { name: "Text", value: totals.text, color: chartColors.text },
      { name: "Video", value: totals.video, color: chartColors.video },
    ];
  }, [logs]);

  const totalInteractions = chartData.reduce(
    (total, item) => total + item.value,
    0,
  );

  return (
    <div className="space-y-8 px-5 py-10">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-slate-800">
          Friendship Analytics
        </h1>
        <p className="text-slate-500">
          A quick snapshot of your logged calls, texts, and video check-ins.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800">
                Interaction Breakdown
              </h2>
              <p className="text-slate-500">
                Total logged interactions: {totalInteractions}
              </p>
            </div>
          </div>

          <div className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={4}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          {chartData.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {item.name}
                  </h3>
                  <p className="text-slate-500">{item.value} interactions</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
