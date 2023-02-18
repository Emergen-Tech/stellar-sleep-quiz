import logo from "@/images/logo.png";
import Image from "next/image";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitAnswer,
  selectQuestion,
} from "@/reducers/QuizSlice";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import logo from "@/images/logo.png";

export default function AverageSleepResult() {
  // console.log(multipleChoiceResponses, "mcqs in isi");

  const dispatch = useDispatch();

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }
  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] grid justify-center p-5 px-7 bg-[#37533C]">
        <div className="w-full grid h-auto space-y-4">
          <div className="flex">
            <div className="w-[25%]">
              <button
                onClick={() => handlePreviousPage()}
                className=" text-white text-[30px]"
              >
                <AiOutlineArrowLeft />
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                src={logo}
                alt="logo"
                width="150"
                height="120"
                className="w-[160px] h-[32px]"
              />
            </div>
          </div>

          <div className="grid space-y-6 justify-center text-center">
            <div className="grid gap-2">
              <div className="text-[20px] text-[#ffffff]">
                The average man in their 30s sleeps
              </div>
              <div className="text-[50px] font-bold text-center text-[#7B91DD]">
                ⏱ 17.1 min
              </div>
              <div className="text-[16px] text-[#ffffff]">
                to fall asleep...
              </div>
            </div>

            <div className="grid gap-2">
              <div className="text-[20px] text-[#ffffff]">
                You currently take
              </div>
              <div className="text-[45px] font-bold text-center text-[#7B91DD]">
                ⏱ 4 min
              </div>
              <div className="text-[16px] text-[#ffffff]">
                to fall asleep...
              </div>
            </div>

            <div className="grid gap-2">
              <div className="text-[20px] text-[#ffffff]">
                The average user who completes our program takes
              </div>
              <div className="text-[45px] font-bold text-center text-[#6FCF97]">
                ⏳ 53 min
              </div>
              <div className="text-[16px] text-[#ffffff]">
                less time to fall asleep.
              </div>
            </div>
          </div>

          <div className="w-full">
            <button
              onClick={() => handleNextPage()}
              className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
