import { Suspense, useEffect } from "react";
import AllPeople from "./AllPeople";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";

const allPeopleData = fetch("/people.json").then((res) => res.json());

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Banner peopleInfo={allPeopleData} />
      <div className="divider mb-[4px]"></div>
      <Suspense
        fallback={
          <div className="py-[52px] w-full flex items-center justify-center">
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          </div>
        }
      >
        <AllPeople peopleInfo={allPeopleData} />
      </Suspense>
    </>
  );
};

export default Home;