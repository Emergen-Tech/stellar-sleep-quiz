import logo from "@/images/logo.png";
// import personalizedApproachSleepImage from "@/images/personalizedApproachSleep.png";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import locationSVG from "@/images/locationSVG.svg";
import animationData from "@/components/lotties/lottieLoader.json";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
} from "@/reducers/QuizSlice";
import { useEffect } from "react";
import Lottie from "react-lottie";
import { useDispatch } from "react-redux";

export default function AnalyzingPage() {
  // const [animationCompleted, setAnimationCompleted] = useState(false);
  const dispatch = useDispatch();

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }

  const defaultOptions = {
    loop: false,
    // autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      handleNextPage();
    }, 11000);

    // Clear the timer when the component unmounts or changes
    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);

  // function redirect() {
  //   window.setTimeout(function () {
  //     handleNextPage();
  //   }, 5000);
  // }

  // console.log(animationCompleted);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-auto grid justify-center p-5 px-7 bg-[#37533C] overflow-y-auto">
        <div className={`w-full grid gap-4`}>
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
                priority={true}
                src={logo}
                alt="logo"
                width="150"
                height="120"
                className="w-[140px] h-[32px]"
                preload={true}
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

          <div>
            <Lottie
              options={defaultOptions}
              height={320}
              width={320}
              isClickToPauseDisabled={true}
              onComplete={() => handleNextPage()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
