import logo from "@/images/logo.png";
import Image from "next/image";
import aasm from "@/images/aasm.png";
import acp from "@/images/acp.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitAnswer,
  selectQuestion,
} from "@/reducers/QuizSlice";
import { useState, useEffect } from "react";

export default function BehavioraltherapyInfo() {
  const dispatch = useDispatch();
  const { questions, currentQuestion } = useSelector((state) => state.quiz);
  const current = useSelector(selectQuestion);

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
                // type="button"
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
          <div className="font-bold text-[20px] text-[#ffffff]">
            Stellar Sleep can help you fall asleep faster.
          </div>
          <div className="text-[17px] text-[#ffffff]">
            Our behavioral therapy based curriculum is supported by clinical
            evidence and is the gold standard for insomnia treatment.
          </div>
          <div className="grid gap-5 w-[350px]">
            <div className="flex gap-3">
              <div className="w-[140px]">
                <Image
                  src={aasm}
                  alt="aasm"
                  width={200}
                  height={200}
                  className="w-[140px] object-contain"
                />
              </div>
              <div className="text-[14px] text-[#ffffff] w-[190px] italic">
                "The guideline includes one strong recommendation — which is one
                that clinicians should follow under most circumstances — for the
                use of [behavioral therapy]"
              </div>
            </div>
            <div className="flex gap-3">
              <div>
                <Image
                  src={acp}
                  alt="acp"
                  width={200}
                  height={200}
                  className="w-[140px] object-contain"
                />
              </div>
              <div className="text-[14px] text-[#ffffff] w-[190px] italic">
                “[Behavioral therapy] should be the first-line treatment for
                adults with chronic insomnia”
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
