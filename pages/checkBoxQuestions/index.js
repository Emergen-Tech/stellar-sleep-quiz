import CheckBoxQuiz from "@/components/quizTypes/CheckBoxQuiz";
import { useRouter } from "next/router";

export default function CheckBoxQuestionsPage() {
  const router = useRouter();
  let question = router.query.question;
  let choices = router.query.choices;
  let id = router.query.id;

  return (
    <>
      <div>
        <CheckBoxQuiz question={question} choices={choices} id={id} />
      </div>
    </>
  );
}
