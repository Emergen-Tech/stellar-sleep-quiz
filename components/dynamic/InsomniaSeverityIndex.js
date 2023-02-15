import logo from "@/images/logo.png";
import Image from "next/image";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitAnswer,
  selectQuestion,
} from "@/reducers/QuizSlice";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import logo from "@/images/logo.png";

export default function InsomniaSeverityIndex() {
  const { multipleChoiceResponses } = useSelector((state) => state.quiz);

  const val = [4, 5, 6, 7, 8, 9, 10];
  let temp2 = 0;
  let result = val.map((i) => {
    let temp = multipleChoiceResponses[i];
    let temp1 = temp[2];
    temp2 = temp2 + temp1;
    if (i === 10) {
      return temp2;
    }
  });

  console.log(multipleChoiceResponses, "mcqs in isi");

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
        <div className="w-full grid gap-4">
          <div className="flex ">
            <div className="w-[25%]">
              <button
                onClick={() => handlePreviousPage()}
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
          <div className="grid justify-center text-center">
            <div className="text-[20px] text-[#ffffff]">
              Based on what you've told us, your insomnia severity index* is
            </div>
            <div className="text-[45px] font-bold py-7 text-center text-[#7B91DD]">
              {result}
            </div>
            <div className="text-[20px] text-[#ffffff]">
              This means that you have
            </div>
            <div className="text-[50px] font-bold text-center text-[#6FCF97]">
              {result <= 7
                ? "No clinically significant insomnia"
                : result <= 14
                ? "Subthreshold insomnia"
                : result <= 21
                ? "Moderate clinical insomnia"
                : "Severe clinical insomnia"}
            </div>
            <div className="text-[14px] text-[#ffffff]">
              * Insomnia Severity Index (ISI) is the most widely recognized and
              validated screening tool used by clinicians to evaluate insomnia.
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
