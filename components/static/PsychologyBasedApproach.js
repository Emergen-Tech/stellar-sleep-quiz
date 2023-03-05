import logo from "@/images/logo.png";
import Image from "next/image";
import aasm from "@/images/aasm.png";
import acp from "@/images/acp.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import locationSVG from "@/images/locationSVG.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  // submitAnswer,
  // selectQuestion,
} from "@/reducers/QuizSlice";
import { useState, useEffect } from "react";

export default function PsychologyBasedApproach() {
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });
  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-auto grid justify-center p-5 px-7 bg-[#37533C] overflow-y-auto">
        <div
          className={`w-full grid gap-4 transition-all ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          } duration-500`}
        >
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
                src={logo}
                alt="logo"
                width="150"
                height="120"
                className="w-[160px] h-[32px]"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={locationSVG}
              alt="location point"
              width={35}
              height={25}
              className="w-[30px] flex justify-center items-center"
            />
          </div>
          <div className="text-[20px] text-[#ffffff]">
            <div>
              Sleep is personal, and shouldn’t be a one-size-fits-all approach.
            </div>
            <br />
            <div>
              A psychology-based approach to improving your sleep is unique and
              isn’t for everyone.
            </div>
            <br />
            <div>
              Tell us about yourself in the next few questions so we can
              determine if Stellar Sleep is the right program for you at this
              time.
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
