import Image from "next/image";
import QualitySleepGraphImage from "@/images/quality_sleep_graph.png";
import logo from "@/images/logo.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  // submitAnswer,
  // selectQuestion,
} from "@/reducers/QuizSlice";
import { useState, useEffect } from "react";

export default function SleepingPillsAndStellarSleepResearch() {
  const dispatch = useDispatch();
  // const { questions, currentQuestion } = useSelector((state) => state.quiz);
  // const current = useSelector(selectQuestion);

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
          <div className="grid gap-5 justify-center">
            <div className="grid gap-4">
              <div className="text-[20px] text-[#ffffff]">
                Research shows that while sleeping pills can work in the short
                term, they tend to quickly become less effective over time.
              </div>
              <div className="text-[20px] text-[#ffffff]">
                If you’re currently on sleeping pills, you can use that in
                combination with Stellar Sleep to get the temporary relief from
                sleeping pills combined with the permanent results from Stellar
                Sleep.
              </div>
              <div className="grid gap-3 p-2">
                <div className="flex justify-center">
                  <Image
                    src={JAMA}
                    alt="JAMA"
                    width={200}
                    height={200}
                    className="w-[140px] object-contain"
                  />
                </div>
                <div className="text-[12px] text-center text-[#ffffff] italic">
                  “[Psychology] in combination with medication produced
                  significant improvements of sleep latency and efficiency. The
                  best long-term outcome was obtained with patients treated with
                  both initially, followed by [psychology] alone.”
                </div>
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
