import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

export const Button = ({ textButton }) => {
  return (
    <>
      <button className="capitalize border-2 border-[#d2d2d0] rounded-full text-[#d2d2d0] font-bold text-[17px] py-1.5 px-9 w-auto min-w-fit inline-flex gap-5 justify-between items-center cursor-pointer">
        {textButton}
        <BsFillArrowUpRightSquareFill className="cursor-pointer" size={25} />
      </button>
    </>
  )
}
