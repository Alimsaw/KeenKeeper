const DescriptionCard = ({ number, text }) => {
  return (
    <div className="flex flex-col gap-[8px] items-center justify-center bg-[#ffffff] shadow-sm rounded-[6px] py-[32px] px-[12px] w-[100%] text-center">
      <span className="text-[20px] lg:text-[30px] font-semibold text-[#244D3F]">
        {number}
      </span>
      <span className="text-[12px] md:text-[14px] font-normal text-[#6b7280]">
        {text}
      </span>
    </div>
  );
};

export default DescriptionCard;