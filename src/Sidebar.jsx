import { FaShoppingCart } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { TbPhotoUp } from "react-icons/tb";

// import Logo from "./images/vite.svg";

export default function Sidebar() {
  return (
    <div className="">
      <div className="flex">
        <div className=" border  bg-white  w-[100px] p-6 h-[850px]">
          <img className="ml-[4px]" src={Logo} alt="" />
          <FaShoppingCart className="text-gray-400 w-6 h-6 ml-4 mt-6" />
          <MdPeople className="text-gray-400 w-6 h-6 ml-4 mt-6" />
          <BiTargetLock className="text-gray-400 w-6 h-6 ml-4 mt-6" />
          <TbPhotoUp className="text-gray-400 w-6 h-6 ml-4 mt-6" />
        </div>
        <div className="">
          <div className="w-[1376px] border h-[64px] bg-white items-center justify-between flex">
            <h2 className="text-[18px] ml-[20px] text-[#5B6871]">Клиенты</h2>
            <button className="w-[135px] border h-[64px] text-[#1AC19D]">
              + Добавить
            </button>
          </div>
          <div className="bg-[#E5E9EB] items-center flex h-[56px] w-[100%] justify-between ">
            <input
              type="text"
              placeholder="Поиск..."
              className="border w-[410px] mt-3 rounded-[6px] ml-[20px] px-4 h-[32px]"
            />
            <div className="border ">
              <button className=" text-[14px] mr-[56px]">Сегодня</button>
              <button className=" text-[14px] mr-[24px]">Столбцы</button>
              <button className=" text-[14px] mr-[24px]">Фильтр</button>
              <button className=" text-[14px] mr-[24px]">Скачать</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border flex ml-[90px] mt-[-720px] absolute">
        <div className="w-[319px] rounded-[6px] ml-[20px] bg-white h-[120px] border text-center text-[#4094F7] text-[24px] ">
          item
        </div>
        <div className="w-[319px] rounded-[6px] ml-[20px] bg-white h-[120px] border text-center text-[#4094F7] text-[24px] ">
          item
        </div>
        <div className="w-[319px] rounded-[6px] ml-[20px] bg-white h-[120px] border text-center text-[#4094F7] text-[24px] ">
          item
        </div>
        <div className="w-[319px] rounded-[6px] ml-[20px] bg-white h-[120px] border text-center text-[#4094F7] text-[24px]~ ">
          item
        </div>
      </div>
      <div className="border w-[1336px] h-[536px] mt-[-570px] ml-[114px] bg-white rounded-[6px]"></div>
    </div>
  );
}
