import logo from "@/images/logo.png";
import personalizedApproachSleepImage from "@/images/personalizedApproachSleep.png";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
} from "@/reducers/QuizSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalizedApproachSleep() {
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
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-auto grid justify-center p-5 px-7 bg-[#37533C] overflow-y-auto">
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
            <div className="flex justify-center">
              <Image
                priority={true}
                src={logo}
                alt="logo"
                preload={true}
                width="150"
                height="120"
                className="w-[140px] h-[32px]"
              />
            </div>
          </div>
          <div className="grid gap-5 justify-center">
            <div className="text-[20px] text-[#ffffff] font-bold">
              Stellar Sleep uses a personalized, science-backed approach to
              improve your sleep.
            </div>
            <div className="grid gap-4">
              <div className="text-[20px] text-[#ffffff]">
                We partnered with top sleep experts and have already helped over
                10,000 users fall asleep faster, spend more time asleep, and
                wake up less during the night.
              </div>
              <div>
                <Image
                  priority={true}
                  src={personalizedApproachSleepImage}
                  alt="personalized Approach Sleep Image"
                  width="150"
                  preload={true}
                  height="120"
                  className="w-full"
                />
              </div>
              <div className="text-[20px] text-[#ffffff]">
                Our clinical research partners include Harvard Medical School
                and Brigham and Women's Hospital.
              </div>
            </div>
          </div>

          <div className="w-full h-[100px]">
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
