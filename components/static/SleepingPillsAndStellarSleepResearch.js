import JAMA from "@/images/JAMA.png";
import logo from "@/images/logo.png";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
} from "@/reducers/QuizSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

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

  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );
  const question = current.question;

  const page_name = question.page_name;

  const props = {
    step: { page_name },
    flowId: "savvy",
  };

  if (
    typeof window !== "undefined" &&
    window.rudderanalytics &&
    typeof window.rudderanalytics.track === "function"
  ) {
    window.rudderanalytics.track(`start sleep quiz`, props);
  }

  // const [data, setdata] = useState();

  // useEffect(() => {
  //   setdata("hello");
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] grid justify-center p-5 px-7 bg-[#37533C] overflow-y-auto">
        <div className={`w-full grid gap-4`}>
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
                priority={true}
                src={logo}
                preload={true}
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
                If you???re currently on sleeping pills, you can use that in
                combination with Stellar Sleep to get the temporary relief from
                sleeping pills combined with the permanent results from Stellar
                Sleep.
              </div>
              <div className="grid gap-3 p-2">
                <div className="flex justify-center">
                  <Image
                    priority={true}
                    src={JAMA}
                    alt="JAMA"
                    preload={true}
                    width={200}
                    height={200}
                    className="w-[140px] object-contain"
                  />
                </div>
                <div className="text-[12px] text-center text-[#ffffff] italic">
                  ???[Psychology] in combination with medication produced
                  significant improvements of sleep latency and efficiency. The
                  best long-term outcome was obtained with patients treated with
                  both initially, followed by [psychology] alone.???
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
