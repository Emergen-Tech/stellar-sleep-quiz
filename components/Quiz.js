import React, { useState, useEffect } from "react";
// import ProgressBar from "./ProgressBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  selectQuestion,
} from "@/reducers/QuizSlice";
import MultipleChoiceQuiz from "./quizTypes/MultipleChoiceQuiz";
import CheckBoxQuiz from "./quizTypes/CheckBoxQuiz";
import BehavioraltherapyInfo from "./static/BehavioraltherapyInfo";
import QualitySleepGraph from "./static/QualitySleepGraph";
import PsychologyBasedApproach from "./static/PsychologyBasedApproach";
// import Template from "./common/Template";
import InsomniaSeverityIndex from "./dynamic/InsomniaSeverityIndex";
import { useRouter } from "next/router";

export default function Quiz() {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [answers, setAnswers] = useState([]);
  // const [selectedOption, setSelectedOption] = useState(null);
  // const [showInfo, setShowInfo] = useState(false);
  // const current = questions[currentQuestion];

  const dispatch = useDispatch();
  const { questions, currentQuestion, multipleChoiceResponses } = useSelector(
    (state) => state.quiz
  );
  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  // function handleNextPage() {
  //   dispatch(moveToNextQuestion());
  // }
  // console.log(current, "this is current question");
  // console.log(responses, "Answers array");
  console.log(multipleChoiceResponses, "mcqs");

  return (
    <div className="bg-transparent p-4 w-[400px]">
      {current.inputType === "static" ? (
        ""
      ) : current.inputType === "dynamic" ? (
        ""
      ) : (
        <div className="flex gap-8 pr-16 justify-center py-[20px]">
          {currentQuestion > 0 && (
            <button
              type="button"
              onClick={() => handlePreviousPage()}
              className=" text-white text-[20px]"
            >
              <AiOutlineArrowLeft />
            </button>
          )}
          <div className="text-[15px] text-[#FFFFFF]">
            📋 Understanding your sleep profile
          </div>
        </div>
      )}

      {(() => {
        switch (current.inputType) {
          case "multipleChoice":
            return (
              <MultipleChoiceQuiz
                question={current.question}
                choices={current.choices}
                id={current.id}
              />
            );
          case "CheckBox":
            return (
              <CheckBoxQuiz
                question={current.question}
                choices={current.choices}
                id={current.id}
              />
            );
          case "static":
            if (current.typeStatic === "behavioral therapy static page") {
              return <BehavioraltherapyInfo />;
            } else if (current.typeStatic === "Quality sleep") {
              return <QualitySleepGraph />;
            } else if (current.typeStatic === "psychology-based approach") {
              return <PsychologyBasedApproach />;
            }
          case "dynamic":
            if (current.typeDynamic === "ISI") {
              return <InsomniaSeverityIndex />;
            }
          default:
            return null;
        }
      })()}
      {/* {current.inputType !== ("static" || "dynamic") && (
        <div className="w-[350px]">
          <button
            onClick={() => handleNextPage()}
            className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}
