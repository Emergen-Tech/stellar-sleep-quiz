import React, { useState, useEffect } from "react";
// import ProgressBar from "./ProgressBar";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitMultipleChoiceAnswer,
  selectQuestion,
  setAnswer,
} from "@/reducers/QuizSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MultipleChoiceQuiz() {
  const [selectedOption, setSelectedOption] = useState([]);
  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );
  const question = current.question;
  const choices = current.choices;

  // const [selectChoice, setSelectedChoice] = useState();
  const dispatch = useDispatch();

  function handleOptionClick(option) {
    // setSelectedChoice(option);
    dispatch(setAnswer(option));
    // setSelectedOption(option);
  }

  // useEffect(() => {
  // if (output !== "") {
  //   setSelectedOption(output);
  //   console.log(output, "output");
  // }
  // });

  function handleSubmitResponse() {
    // dispatch(setAnswer(selectedOption));
    // setSelectedOption("");
    if (currentAnswerVar) {
      dispatch(moveToNextQuestion());
    }
  }

  const currentAnswerVar = current.output.answerVar
    ? current.output.answerVar[0]
    : null;
  // console.log(selectedOption, "mcqs select");

  return (
    <>
      <div className="w-[350px]">
        <h1 className="text-[25px] text-[#ffffff] py-4">{question}</h1>
        <div className="grid gap-2">
          {Object.entries(choices).map((entry) => (
            <div key={entry[0]} className="mb-2">
              <button
                onClick={() => handleOptionClick(entry[0])}
                className={`w-full text-center hover:scale-[1.02] transition-all h-[65px] rounded-[10px] px-7 text-[17px] text-[#ffffff]
                ${
                  entry[0] === currentAnswerVar
                    ? "bg-[#769E7D]"
                    : "bg-[#37533C]"
                }`}
              >
                {entry[1]}
              </button>
            </div>
          ))}
        </div>
        <div className="w-[350px]">
          <button
            onClick={() => handleSubmitResponse()}
            className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
