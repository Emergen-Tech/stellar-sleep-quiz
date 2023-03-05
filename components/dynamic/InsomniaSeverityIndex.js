import logo from "@/images/logo.png";
import Image from "next/image";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  setAnswer,
} from "@/reducers/QuizSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import logo from "@/images/logo.png";
import { useEffect, useState } from "react";

export default function InsomniaSeverityIndex() {
  const questions = useSelector((state) => state.quiz.questions);

  const isiQuestionIndexes = [3, 4, 5, 6, 7, 8, 9];
  let ISI = 0;
  for (let index of isiQuestionIndexes) {
    const question = questions[index];
    if (question.output.answerVar.length > 0) {
      ISI += parseInt(question.output.answerVar);
    } else {
      ISI = -1;
      break;
    }
  }

  const isi_label =
    ISI === -1
      ? "Unknown"
      : ISI <= 7
      ? "No clinically significant insomnia"
      : ISI <= 14
      ? "Subthreshold insomnia"
      : ISI <= 21
      ? "Moderate clinical insomnia"
      : "Severe clinical insomnia";

  // console.log(isi_label, "label");
  const dispatch = useDispatch();

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(setAnswer([ISI, isi_label]));
    dispatch(moveToNextQuestion());
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });
  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] grid justify-center p-5 px-7 bg-[#37533C]">
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
              {ISI === -1 ? "Please select all previous answers" : ISI}
            </div>
            <div className="text-[20px] text-[#ffffff]">
              This means that you have
            </div>
            <div className="text-[50px] font-bold text-center text-[#6FCF97]">
              {isi_label}
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
