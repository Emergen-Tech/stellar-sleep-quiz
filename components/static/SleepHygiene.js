import aasm from "@/images/aasm.png";
import logo from "@/images/logo.png";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
} from "@/reducers/QuizSlice";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function SleepHygiene() {
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
          <div className="grid gap-5 justify-center px-3">
            <div className="text-[20px] text-[#ffffff] font-bold">
              You’re not alone when it comes to sleep hygiene.
            </div>
            <div className="grid gap-4">
              <div className="text-[20px] text-[#ffffff]">
                For some people, techniques like cutting coffee make little
                difference. If you think back to a time when you were a good
                sleeper, you probably never worried about things like that.
              </div>
              <div className="text-[20px] text-[#ffffff]">
                The goal of Stellar Sleep is to move beyond sleep hygiene by
                reprogramming how your mind thinks about sleep.
              </div>
              <div className="flex gap-3 w-[100%]">
                <div className="w-[140px]">
                  <Image
                    src={aasm}
                    alt="aasm"
                    width={200}
                    height={200}
                    className="w-[140px] object-cover"
                  />
                </div>
                <div className="text-[13px] text-[#ffffff] w-[160px] italic">
                  “Sleep hygiene...does not constitute an effective stand-alone
                  therapy”
                </div>
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
