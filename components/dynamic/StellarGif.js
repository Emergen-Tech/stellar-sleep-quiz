import { moveToNextQuestion } from "@/reducers/QuizSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

import first_gif from "@/images/Giffs/1.gif";
import second_gif from "@/images/Giffs/2.gif";
import third_gif from "@/images/Giffs/3.gif";
import fourth_gif from "@/images/Giffs/4.gif";
import fifth_gif from "@/images/Giffs/5.gif";
import sixth_gif from "@/images/Giffs/6.gif";
import seventh_gif from "@/images/Giffs/7.gif";
import eigth_gif from "@/images/Giffs/8.gif";

export default function StellarGif() {
  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.quiz.questions);
  const questionVars = [
    "consequences",
    "stressed_thinking_to_go_bed",
    "mind_race_in_bed",
  ];
  const answerVars = questionVars.map(
    (questionVar) =>
      allQuestions.find(
        (question) => question.output.questionVar === questionVar
      ).output.answerVar
  );
  console.log(answerVars);

  const gifs = [
    first_gif,
    second_gif,
    third_gif,
    fourth_gif,
    fifth_gif,
    sixth_gif,
    seventh_gif,
    eigth_gif,
  ];

  const getGif = () => {
    if (answerVars[0] != "none") {
      if (answerVars[1] != "no") {
        if (answerVars[2] != "no") {
          return gifs[0];
        } else {
          return gifs[1];
        }
      } else {
        if (answerVars[2] != "no") {
          return gifs[2];
        } else {
          return gifs[3];
        }
      }
    } else {
      if (answerVars[1] != "no") {
        if (answerVars[2] != "no") {
          return gifs[4];
        } else {
          return gifs[5];
        }
      } else {
        if (answerVars[2] != "no") {
          return gifs[6];
        } else {
          return gifs[7];
        }
      }
    }
  };

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }

  function redirect() {
    window.setTimeout(function () {
      handleNextPage();
    }, 30000);
  }

  return (
    <>
      <Head>
        <link rel="preload" href="@/images/Giffs/1.gif" as="image" />
        <link rel="preload" href="@/images/Giffs/2.gif" as="image" />
        <link rel="preload" href="@/images/Giffs/3.gif" as="image" />
        <link rel="preload" href="@/images/Giffs/4.gif" as="image" />
        <link rel="preload" href="@/images/Giffs/5.gif" as="image" />
        <link rel="preload" href="@/images/Giffs/6.gif" as="image" />
        <link rel="preload" href="@/images/Giffs/7.gif" as="image" />
        <link rel="preload" href="@/images/Giffs/8.gif" as="image" />
      </Head>
      <div className="w-[400px] bg-[#000000] h-[100vh] flex justify-center overflow-y-auto">
        <Image
          onLoad={() => redirect()}
          src={getGif()}
          alt="gif"
          width={500}
          height={1000}
          className="w-[400px] h-full"
          priority={true}
          // preload={true}
        />
      </div>
    </>
  );
}
