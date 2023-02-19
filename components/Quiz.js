import React, { useState, useEffect } from "react";
// import ProgressBar from "./ProgressBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
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
import InputFieldQuiz from "./quizTypes/InputFieldQuiz";
import AverageSleepResult from "./dynamic/AverageSleepResult";
import AverageSleepResult2 from "./dynamic/AverageSleepResult2";
import SuccessRate from "./dynamic/SuccessRate";
import PersonalizedApproachSleep from "./static/PersonalizedApproachSleep";
import SleepingPillsAndStellarSleep from "./static/SleepingPillsAndStellarSleepResearch";
import SleepHygiene from "./static/SleepHygiene";
import AnalyzingPage from "./static/AnalyzingPage";

export default function Quiz() {
  const dispatch = useDispatch();
  const { questions, currentQuestion } = useSelector((state) => state.quiz);

  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );

  // const currentAnswer = useSelector(
  //   (state) => state.quiz.questions[state.quiz.currentQuestion].output.answerVar
  // );

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  // console.log(multipleChoiceResponses, "mcqs");

  // condition for sleep hygiene and sleep pills screens
  const sleep_hygiene = [
    "meditation",
    "melatonin",
    "cutting_coffee_in_the_afternoon",
    "reducing_screen_time_at_night",
  ];
  const sleep_pills = "prescription_sleeping_pills";

  const sleep_improvement_strategies_attempted_Object = questions.find(
    (i) => i.output.questionVar === "sleep_improvement_strategies_attempted"
  );

  const sleep_improvement_strategies_attempted =
    sleep_improvement_strategies_attempted_Object.output.answerVar;

  console.log(sleep_improvement_strategies_attempted);

  return (
    <div className="bg-transparent p-4 w-[400px]">
      {current?.inputType === "static" ? (
        ""
      ) : current?.inputType === "dynamic" ? (
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
        if (current)
          switch (current.inputType) {
            case "multipleChoice":
              return <MultipleChoiceQuiz />;
            case "CheckBox":
              return <CheckBoxQuiz />;
            case "InputField":
              return <InputFieldQuiz />;
            case "static":
              if (current.typeStatic === "behavioral therapy static page") {
                return <BehavioraltherapyInfo />;
              } else if (current.typeStatic === "Quality sleep") {
                return <QualitySleepGraph />;
              } else if (current.typeStatic === "psychology-based approach") {
                return <PsychologyBasedApproach />;
              } else if (current.typeStatic === "personalized approach sleep") {
                return <PersonalizedApproachSleep />;
              } else if (
                current.typeStatic ===
                "sleep hygiene or sleep pills and stellar sleep research"
              ) {
                if (
                  sleep_improvement_strategies_attempted.length === 1 &&
                  sleep_improvement_strategies_attempted[0] === sleep_pills
                ) {
                  return <SleepingPillsAndStellarSleep />;
                } else if (
                  sleep_improvement_strategies_attempted.some(
                    (optionIncluded) => sleep_hygiene.includes(optionIncluded)
                  )
                ) {
                  return <SleepHygiene />;
                } else if (
                  sleep_improvement_strategies_attempted[0] ===
                  "none_of_the_above"
                ) {
                  return <AnalyzingPage />;
                }
                // sleep_improvement_strategies_attempted.length === 1 &&
                // sleep_improvement_strategies_attempted[0] === sleep_pills ? (
                //   <SleepingPillsAndStellarSleep />
                // ) : sleep_improvement_strategies_attempted.some(
                //     (optionIncluded) => sleep_hygiene.includes(optionIncluded)
                //   ) ? (
                //   <SleepHygiene />
                // ) : (
                //   sleep_improvement_strategies_attempted[0] ===
                //     "none_of_the_above" && <AnalyzingPage />
                // );
              }
            case "dynamic":
              if (current.typeDynamic === "ISI") {
                return <InsomniaSeverityIndex />;
              } else if (current.typeDynamic === "Average Sleep") {
                return <AverageSleepResult />;
              } else if (current.typeDynamic === "Average Sleep 2") {
                return <AverageSleepResult2 />;
              } else if (current.typeDynamic === "success rate") {
                return <SuccessRate />;
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
