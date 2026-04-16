import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import usePrimeContext from "../customjs/usePrimeContext";
import toast from "react-hot-toast";

const People = () => {
  const friendData = useLoaderData();
  const { timeline, setTimeline } = usePrimeContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addInteraction = (type) => {
    const newEntry = {
      id: Date.now(),
      name: friendData.name,
      type: type,
      date: new Date().toISOString(),
    };
    setTimeline([newEntry, ...timeline]);
    toast.success(type + " with " + friendData.name + " logged!");
  };

  if (!friendData) {
    return <div className="text-center py-20">Friend not found</div>;
  }

  const nextDueDate = new Date();
  const goalDays = friendData.goal || 30;
  const daysSince = friendData.days_since_contact || 0;
  nextDueDate.setDate(nextDueDate.getDate() + (goalDays - daysSince));

  const formattedNextDue = nextDueDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const profileImage = friendData.image || friendData.picture || "https://via.placeholder.com/80";

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-col items-center text-center">
            <img
              src={profileImage}
              alt={friendData.name}
              className="w-20 h-20 rounded-full object-cover mb-3"
            />

            <h2 className="text-xl font-semibold text-gray-900">
              {friendData.name}
            </h2>

            <span className="mt-2 text-xs px-3 py-1 rounded-full bg-red-100 text-red-600 font-medium">
              {friendData.status || "Overdue"}
            </span>

            {friendData.tags && friendData.tags[0] && (
              <span className="mt-2 text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                {friendData.tags[0].toUpperCase()}
              </span>
            )}

            <p className="mt-3 text-sm text-gray-500 italic">
              "{friendData.bio}"
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Preferred: {friendData.preferred_contact || "email"}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full border rounded-lg py-3 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
              ⏰ Snooze 2 Weeks
            </button>

            <button className="w-full border rounded-lg py-3 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
              📦 Archive
            </button>

            <button className="w-full border rounded-lg py-3 text-sm flex items-center justify-center gap-2 text-red-500 hover:bg-red-50">
              🗑 Delete
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-semibold text-gray-900 mt-1">
                {daysSince}
              </h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <h2 className="text-3xl font-semibold text-gray-900 mt-1">
                {goalDays}
              </h2>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <h2 className="text-lg font-semibold text-gray-900 mt-1">
                {formattedNextDue}
              </h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Relationship Goal</p>
              <h3 className="text-lg font-semibold text-gray-900">
                Connect every <span className="font-bold">{goalDays}</span> days
              </h3>
            </div>

            <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-50">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => addInteraction("call")}
                className="border rounded-xl py-[10px] flex flex-col items-center justify-center hover:bg-gray-50"
              >
                <img src="/assets/call.png" alt="Call" className="w-[20px] h-[20px]" />
                <span className="mt-2 text-sm">Call</span>
              </button>

              <button
                onClick={() => addInteraction("text")}
                className="border rounded-xl py-[10px] flex flex-col items-center justify-center hover:bg-gray-50"
              >
                <img src="/assets/text.png" alt="Text" className="w-[20px] h-[20px]" />
                <span className="mt-2 text-sm">Text</span>
              </button>

              <button
                onClick={() => addInteraction("video")}
                className="border rounded-xl py-[10px] flex flex-col items-center justify-center hover:bg-gray-50"
              >
                <img src="/assets/video.png" alt="video" className="w-[20px] h-[20px]" />
                <span className="mt-2 text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;