import { Suspense } from "react";
import DescriptionCards from "./DescriptionCards";

const Banner = ({ peopleInfo }) => {
  return (
    <section className="w-[100%] flex flex-col items-center justify-center text-center gap-[20px] fade">
      <h1 className="text-[40px] font-bold text-[#374151]">
        Friends to keep close in your life
      </h1>

      <p className="text-[#6b7280] block w-[100%] max-w-[600px]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="btn btn-primary mt-[8px] mb-[12px]">
        <span>+</span> Add a Friend
      </button>

      <Suspense
        fallback={
          <div className="py-[52px] flex justify-center">
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
        <DescriptionCards infoToShow={peopleInfo} />
      </Suspense>
    </section>
  );
};

export default Banner;