import logo from "@/images/logo.png";
// import personalizedApproachSleepImage from "@/images/personalizedApproachSleep.png";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import locationSVG from "@/images/locationSVG.svg";
import JAMA from "@/images/JAMA.png";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
} from "@/reducers/QuizSlice";
import { useDispatch } from "react-redux";

export default function AnalyzingPage() {
  const dispatch = useDispatch();
  // const { questions, currentQuestion } = useSelector((state) => state.quiz);
  // const current = useSelector(selectQuestion);

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }

  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-auto grid justify-center p-5 px-7 bg-[#37533C] overflow-y-auto">
        <div className="w-full grid gap-4">
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
                className="w-[140px] h-[32px]"
              />
            </div>
          </div>
          <div className="grid gap-5 justify-center">
            <div className="grid gap-4">
              <div className="text-[20px] text-[#ffffff] font-bold">
                Sit tight! We’re building your perfect plan based on data points
                from successful Stellar Sleep users.
              </div>
              <div className="text-[20px] text-[#ffffff]">
                Analyzing your sleep profile...
              </div>
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
