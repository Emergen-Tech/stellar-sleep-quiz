import Quiz from "@/components/Quiz";
import { restoreFromLocalStorage } from "@/reducers/QuizSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function QuizPage() {
  const initialized = useRef(false);
  const quizState = useSelector((state) => state.quiz);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialized.current) {
      localStorage.setItem("quiz", JSON.stringify(quizState));
    }
  }, [quizState]);

  useEffect(() => {
    if (!initialized.current) {
      const storedStateString = localStorage.getItem("quiz");
      if (storedStateString) {
        try {
          dispatch(restoreFromLocalStorage(JSON.parse(storedStateString)));
        } catch (_) {}
      }
      initialized.current = true;
    }
  }, []);

  return (
    <>
      <div>
        <Quiz />
      </div>
    </>
  );
}
