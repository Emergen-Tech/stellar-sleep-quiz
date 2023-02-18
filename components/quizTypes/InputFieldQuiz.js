import { useState } from "react";
// import ProgressBar from "./ProgressBar";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { moveToNextQuestion, setAnswer } from "@/reducers/QuizSlice";
import { useDispatch, useSelector } from "react-redux";

export default function InputFieldQuiz() {
  // const [selectedOption, setSelectedOption] = useState([]);
  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );
  const question = current.question;
  // const choices = current.choices;
  const unit = current.unit;
  // const [selectChoice, setSelectedChoice] = useState();
  const dispatch = useDispatch();
  const [inputedValue, setInputedValue] = useState();
  function handleInputAnswer(value) {
    // setSelectedChoice(option);
    dispatch(setAnswer([value]));
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

  const currentAnswerVar =
    current.output.answerVar.length > 0 ? current.output.answerVar[0] : null;
  // console.log(currentAnswerVar, 'mcqs select');

  return (
    <>
      <div className="w-[350px]">
        <h1 className="text-[25px] text-[#ffffff] py-4">{question}</h1>
        <div className="flex gap-2">
          {/* {Object.entries(choices).map((entry) => (
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
          ))} */}
          <div>
            <form>
              <input
                type="number"
                // value={}
                onChange={() => handleInputAnswer(event.target.value)}
                required
                className=" h-[63px] rounded-[11px] text-[#282B2D] font-[700] text-[18px] px-[16px] py-[8px] border-[1px] border-[#dddddd] decoration-inherit transition-colors duration-300 ease-in-out delay-0 "
              />
            </form>
          </div>
          <div className="text-[17px] text-[#ffffff] flex items-center">
            {unit}
          </div>
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
