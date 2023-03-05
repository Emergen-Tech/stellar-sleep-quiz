import { moveToNextQuestion, setAnswer } from "@/reducers/QuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CheckBoxQuiz() {
  // const [selectedOptions, setSelectedOptions] = useState([]);

  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );
  const id = current.id;
  const question = current.question;
  const choices = current.choices;
  const currentAnswerVars = current.output.answerVar;

  const usecases = {
    "none + option others": "set selection",
    "others + option none": "set selection",
    "empty + option none": "set/append selection",
    "empty + option others": "set/append selection",
    "others + option others2": "append selection",
  };

  const handleOptionSelect = (option) => {
    // 'none + option none': 'filter',
    // 'others + option others': 'filter',
    let newAnswer;
    if (currentAnswerVars.includes(option)) {
      newAnswer = currentAnswerVars.filter((o) => o !== option);
    } else if (option != "none" && !currentAnswerVars.includes("none")) {
      newAnswer = [...currentAnswerVars, option];
    } else {
      newAnswer = [option];
    }
    dispatch(setAnswer(newAnswer));
  };

  const dispatch = useDispatch();

  function handleSubmitResponse() {
    if (currentAnswerVars.length > 0) {
      dispatch(moveToNextQuestion());
    }
  }
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
  }, [id]);

  return (
    <>
      <div
        className={`w-[350px] transition-opacity ${
          isVisible ? "opacity-100" : "opacity-0"
        } duration-500`}
      >
        <h1 className="text-[25px] text-[#ffffff] py-4">{question}</h1>
        <div className="grid gap-2">
          {Object.entries(choices).map((entry) => (
            <div
              onClick={(e) => handleOptionSelect(entry[0])}
              key={entry[0]}
              className={`w-full px-8 mb-2 cursor-pointer flex items-center hover:scale-[1.02] ${
                currentAnswerVars.includes(entry[0])
                  ? "bg-[#769E7D]"
                  : "bg-[#37533C]"
              } transition-all h-[60px] rounded-[10px] text-[20px] text-[#ffffff]`}
            >
              <div>
                <input
                  type="checkbox"
                  checked={currentAnswerVars.includes(entry[0]) ? true : false}
                  className="mr-2 w-4 h-4 border-[1px] checked:bg-transparent text-[#000000] rounded-[10px] focus:outline-none"
                  onChange={(e) => handleOptionSelect(entry[0])}
                />
              </div>
              <div className="flex text-[19.5px] leading-[24px]">
                {entry[1]}
              </div>
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
