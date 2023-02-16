import MultipleChoiceQuiz from "@/components/quizTypes/MultipleChoiceQuiz";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MultipleChoiceQuestionsPage() {
  const router = useRouter();

  const [question, setQuestion] = useState();
  const [choices, setChoices] = useState();
  const [id, setId] = useState();

  // const question = router.query.question;
  // const choices = router.query.choices;
  // const id = router.query.id;

  useEffect(() => {
    setQuestion(router.query.question);
    setChoices(router.query.choices);
    setId(router.query.id);
  });
  return (
    <>
      <div>
        <MultipleChoiceQuiz question={question} choices={choices} id={id} />
      </div>
    </>
  );
}
