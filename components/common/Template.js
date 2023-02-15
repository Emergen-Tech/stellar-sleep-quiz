import logo from "@/images/logo.png";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Template({ one }) {
  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] grid justify-center p-5 px-7 bg-[#37533C]">
        <div className="w-full grid gap-4">
          <div className="flex ">
            <div className="w-[25%]">
              <button
                // type="button"
                // onClick={handleBack}
                className=" text-white text-[30px]"
              >
                <AiOutlineArrowLeft />
              </button>
            </div>
            <div className="  flex justify-center">
              <Image
                src={logo}
                alt="logo"
                width="150"
                height="120"
                className="w-[160px] h-[32px]"
              />
            </div>
          </div>
          <div>{one}</div>
          <div className="w-full">
            <button className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
