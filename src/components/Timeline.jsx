import { useEffect, useState } from "react";
import usePrimeContext from "../customjs/usePrimeContext";
import { useLocation } from "react-router-dom";

const Timeline = () => {
  const { timeline } = usePrimeContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [filteredEntries, setFilteredEntries] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [dateOrder, setDateOrder] = useState("newest");
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    setFilteredEntries(timeline);
  }, [timeline]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      let filtered = [];
      if (selectedType === "") {
        filtered = [...timeline];
      } else {
        for (let i = 0; i < timeline.length; i++) {
          if (timeline[i].type === selectedType) {
            filtered.push(timeline[i]);
          }
        }
      }

      const searched = [];
      for (let i = 0; i < filtered.length; i++) {
        const entry = filtered[i];
        if (entry.name.toLowerCase().includes(nameSearch.toLowerCase())) {
          searched.push(entry);
        }
      }

      if (dateOrder === "newest") {
        searched.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
        searched.sort((a, b) => new Date(a.date) - new Date(b.date));
      }

      setFilteredEntries(searched);
    }, 330);

    return () => clearTimeout(timerId);
  }, [selectedType, dateOrder, timeline, nameSearch]);

  return (
    <div className="flex flex-col gap-[20px] w-[100%] max-w-[1200px] mx-auto fade">
      <h2 className="text-[32px] font-semibold text-[#374151]">Timeline</h2>

      <section className="flex flex-col-reverse md:flex-row md:items-center flex-wrap gap-[12px]">
        <div className="w-[100%] md:w-auto flex flex-row items-center gap-[12px]">
          <select
            value={selectedType}
            className="select w-[100%] md:w-[176px]"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>

          <select
            value={dateOrder}
            className="select w-[100%] md:w-[176px]"
            onChange={(e) => setDateOrder(e.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        <label className="input ml-auto w-[100%] md:w-[280px]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search by name..."
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
          />
        </label>
      </section>

      <section className="flex flex-col gap-[16px]">
        {filteredEntries.length === 0 ? (
          <p className="block text-center text-[14px] font-medium py-[60px]">
            History empty, connect with keens to find the logs here.
          </p>
        ) : (
          filteredEntries.map((entry, idx) => (
            <div
              key={`${idx}_${entry.id}`}
              className="w-[100%] bg-[#ffffff] border border-[#e5e7eb] p-[16px] rounded-md flex items-center gap-[16px]"
            >
              <span className="text-[24px]">
                <img
                  src={
                    entry.type === "call"
                      ? "/assets/call.png"
                      : entry.type === "text"
                      ? "/assets/text.png"
                      : "/assets/video.png"
                  }
                  className="w-[32px] aspect-square object-contain"
                  alt=""
                />
              </span>
              <div>
                <span className="block text-[18px] text-[#6b7280] font-normal">
                  <span className="capitalize font-medium text-[#374151]">
                    {entry.type}
                  </span>{" "}
                  with {entry.name}
                </span>
                <span className="text-[14px] font-medium text-[#6b7280]">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Timeline;