import { moveToNextQuestion, setAnswer } from "@/reducers/QuizSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CheckBoxQuiz() {
  // const [selectedOptions, setSelectedOptions] = useState([]);

  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );
  const question = current.question;
  const choices = current.choices;
  const currentAnswerVars = current.output.answerVar;

  const handleOptionSelect = (option) => {
    if (currentAnswerVars.includes(option)) {
      dispatch(setAnswer(currentAnswerVars.filter((o) => o !== option)));
    } else {
      dispatch(setAnswer([...currentAnswerVars, option]));
    }
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

  return (
    <>
      <div className="w-[350px]">
        <h1 className="text-[25px] text-[#ffffff] py-4">{question}</h1>
        <div className="grid gap-2">
          {Object.entries(choices).map((entry) => (
            <label
              key={entry[0]}
              className={`w-full px-5 mb-2 flex items-center hover:scale-[1.02] ${
                currentAnswerVars.includes(entry[0])
                  ? "bg-[#769E7D]"
                  : "bg-[#37533C]"
              } transition-all h-[60px] rounded-[10px] text-[20px] text-[#ffffff]`}
            >
              <input
                type="checkbox"
                checked={currentAnswerVars.includes(entry[0]) ? true : false}
                className="mr-2 w-4 h-4"
                onChange={(e) => handleOptionSelect(entry[0])}
              />
              {entry[1]}
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
