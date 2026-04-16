const PeopleCard = ({ data }) => {
  const {
    name,
    image,
    picture,
    tags = [],
    status,
    days_since_contact,
  } = data;

  const profileImage = image || picture || "https://via.placeholder.com/80?text=No+Image";

  let statusClass = "bg-red-600 text-white";
  let statusLabel = "Overdue";

  if (status === "on-track") {
    statusClass = "bg-green-100 text-green-700";
    statusLabel = "On-Track";
  } else if (status === "almost due") {
    statusClass = "bg-orange-100 text-orange-600";
    statusLabel = "Almost Due";
  } else if (status === "overdue") {
    statusClass = "bg-red-600 text-white";
    statusLabel = "Overdue";
  }

  return (
    <div className="bg-[#f3f4f6] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="flex justify-center">
        <img
          src={profileImage}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-4"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/80?text=Error";
          }}
        />
      </div>

      <h3 className="text-[20px] font-semibold text-[#1f2937]">
        {name}
      </h3>

      <p className="text-[14px] text-gray-500 mt-1">
        {days_since_contact}d ago
      </p>

      {tags.length > 0 && (
        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4">
        <span className={`text-sm px-4 py-1 rounded-full font-medium ${statusClass}`}>
          {statusLabel}
        </span>
      </div>
    </div>
  );
};

export default PeopleCard;