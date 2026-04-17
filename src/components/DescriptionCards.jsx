import { use } from "react";
import DescriptionCard from "./DescriptionCard";

const DescriptionCards = ({ infoToShow }) => {
  const data = use(infoToShow);

  let totalFriends = 0;
  let goodStatus = 0;
  let needsAction = 0;
  let currentMonth = 0;

  for (let i = 0; i < data.length; i++) {
    const friend = data[i];
    totalFriends++;

    if (friend.status === "on-track") {
      goodStatus++;
    }

    if (friend.status === "overdue" || friend.status === "almost due") {
      needsAction++;
    }

    if (friend.days_since_contact < 30) {
      currentMonth++;
    }
  }

  return (
    <div className="w-[100%] grid grid-cols-2 lg:grid-cols-4 text-[16px] gap-[12px]">
      <DescriptionCard number={totalFriends} text="Total Friends" />
      <DescriptionCard number={goodStatus} text="On Track" />
      <DescriptionCard number={needsAction} text="Need Attention" />
      <DescriptionCard number={currentMonth} text="Interactions This Month" />
    </div>
  );
};

export default DescriptionCards;