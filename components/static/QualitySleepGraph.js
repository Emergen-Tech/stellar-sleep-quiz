import Image from "next/image";
import QualitySleepGraphImage from "@/images/quality_sleep_graph.png";
import logo from "@/images/logo.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitAnswer,
  selectQuestion,
} from "@/reducers/QuizSlice";
import { useState, useEffect } from "react";

export default function QualitySleepGraph() {
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
          <div className="grid justify-center ">
            <div className="text-[20px] text-[#ffffff]">
              Stellar Sleep creates lasting results through psychology, so you
              don’t “yo-yo” through short-term fixes.
            </div>
            <div>
              <Image
                src={QualitySleepGraphImage}
                alt="quality sleep graph"
                width={300}
                height={300}
                className="w-[330px] "
              />
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
