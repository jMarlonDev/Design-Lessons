import { PiArrowUpRightBold } from "react-icons/pi";

export const Button = ({ textButton }) => {
  return (
    <>
      <button className="
         w-[152px] h-[31px] rounded-full
        bg-[#d2d2d0] text-[#393b38] font-bold text-[17px]
        capitalize cursor-pointer
        flex justify-center items-center gap-1
        transition-all duration-300
        hover:bg-[#393b39] hover:text-white hover:text-[19px] hover:border-2 hover:border-[#d2d2d0]
        ">
        {textButton}
        <PiArrowUpRightBold
          className="cursor-pointer"
          size={24}
        />
      </button>
    </>
  )
}
