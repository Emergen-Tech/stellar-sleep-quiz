import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  submitMultipleChoiceAnswer,
  selectQuestion,
  selectAnswer,
} from "@/reducers/QuizSlice";

export default function CheckBoxQuiz({ question, choices, id }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const dispatch = useDispatch();

  function handleSubmitResponse() {
    dispatch(submitMultipleChoiceAnswer(selectedOptions));
    dispatch(moveToNextQuestion());
  }

  return (
    <>
      <div className="w-[350px]">
        <h1 className="text-[25px] text-[#ffffff] py-4">{question}</h1>
        <div className="grid gap-2">
          {choices.map((option) => (
            <label
              key={option}
              className={`w-full px-5 mb-2 flex items-center hover:scale-[1.02] ${
                selectedOptions.includes(option)
                  ? "bg-[#769E7D]"
                  : "bg-[#37533C]"
              } transition-all h-[60px] rounded-[10px] text-[20px] text-[#ffffff]`}
            >
              <input
                type="checkbox"
                value={option}
                className="mr-2 w-4 h-4"
                onChange={handleOptionSelect(option)}
              />
              {option}
            </label>
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
