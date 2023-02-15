import React, { useState, useEffect } from "react";
// import ProgressBar from "./ProgressBar";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitMultipleChoiceAnswer,
  selectQuestion,
  selectAnswer,
} from "@/reducers/QuizSlice";
import { useDispatch } from "react-redux";

export default function MultipleChoiceQuiz({ question, choices, id }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectChoice, setSelectedChoice] = useState();
  const dispatch = useDispatch();
  // console.log(choices, "hello choices");

  function handleOptionClick(index, option, id) {
    setSelectedChoice(option);
    setSelectedOption([id, option, index]);
    // dispatch(submitMultipleChoiceAnswer(selectedOption));
  }

  function handleSubmitResponse() {
    dispatch(submitMultipleChoiceAnswer(selectedOption));
    setSelectedOption([""]);
    if (!selectedOption[""]) {
      dispatch(moveToNextQuestion());
    }
  }
  console.log(selectedOption, "mcqs select");

  return (
    <>
      <div className="w-[350px]">
        <h1 className="text-[25px] text-[#ffffff] py-4">{question}</h1>
        <div className="grid gap-2">
          {choices.map((option, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => handleOptionClick(index, option, id)}
                className={`w-full text-center hover:scale-[1.02] transition-all h-[65px] rounded-[10px] px-7 text-[17px] text-[#ffffff]
                ${
                  option === selectedOption[1] ? "bg-[#769E7D]" : "bg-[#37533C]"
                }`}
              >
                {option}
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
