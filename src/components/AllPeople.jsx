import { use } from "react";
import PeopleCard from "./PeopleCard";
import { Link } from "react-router-dom";

const AllPeople = ({ peopleInfo }) => {
  const peopleList = use(peopleInfo);

  return (
    <section className="w-full max-w-[1350px] mx-auto px-4 py-6">
      <h2 className="text-[28px] font-bold text-[#111827] mb-6">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {peopleList.map((person) => (
          <Link key={person.id} to={`/friend/${person.id}`}>
            <PeopleCard data={person} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllPeople;