import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import usePrimeContext from "../customjs/usePrimeContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Stats = () => {
  const { timeline } = usePrimeContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const prepareChartData = () => {
    let textCount = 0;
    let callCount = 0;
    let videoCount = 0;

    for (let i = 0; i < timeline.length; i++) {
      const entry = timeline[i];
      if (entry.type === "text") textCount++;
      else if (entry.type === "call") callCount++;
      else if (entry.type === "video") videoCount++;
    }

    return [
      { label: "text", value: textCount },
      { label: "call", value: callCount },
      { label: "video", value: videoCount },
    ];
  };

  const chartInfo = prepareChartData();

  const colorMap = {
    text: "#7f37f5",
    call: "#244d3f",
    video: "#37a163",
  };

  return (
    <div className="flex flex-col gap-[20px] w-[100%] max-w-[1200px] mx-auto fade">
      <h2 className="text-[32px] font-semibold text-[#374151]">
        Friendship Analytics
      </h2>

      <div className="w-[100%] p-[20px] lg:p-[32px] rounded-lg shadow-sm flex flex-col items-center justify-center gap-[24px] bg-[#ffffff]">
        <label className="text-[20px] font-medium text-[#422ad5] block text-left w-[100%]">
          By Interaction Type
        </label>

        {chartInfo.some((item) => item.value > 0) ? (
          <PieChart
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "300px",
              aspectRatio: 1,
              marginBottom: "30px",
            }}
          >
            <Pie
              data={chartInfo}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="8px"
              paddingAngle={5}
              dataKey="value"
              nameKey="label"
            >
              {chartInfo.map((entry, idx) => (
                <Cell key={idx} fill={colorMap[entry.label]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : (
          <p className="block text-center text-[14px] font-medium py-[60px]">
            No data available yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Stats;