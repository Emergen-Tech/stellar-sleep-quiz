import { moveToNextQuestion } from '@/reducers/QuizSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function StellarGif() {
  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.quiz.questions);
  const questionVars = [
    'consequences',
    'stressed_thinking_to_go_bed',
    'mind_race_in_bed',
  ];
  const answerVars = questionVars.map(
    (questionVar) =>
      allQuestions.find(
        (question) => question.output.questionVar === questionVar
      ).output.answerVar
  );
  console.log(answerVars);

  const gifs = [
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
    'https://firebasestorage.googleapis.com/v0/b/savvy-flow-uploads/o/5-deloop-min_26906469232563524.gif?alt=media&amp;token=1fb77c58-95bd-4c62-98f3-3e274068d942',
  ];

  function getGif() {
    if (answerVars[0] != 'none') {
      if (answerVars[1] != 'no') {
        if (answerVars[2] != 'no') {
          return gifs[0];
        } else {
          return gifs[1];
        }
      } else {
        if (answerVars[2] != 'no') {
          return gifs[2];
        } else {
          return gifs[3];
        }
      }
    } else {
      if (answerVars[1] != 'no') {
        if (answerVars[2] != 'no') {
          return gifs[4];
        } else {
          return gifs[5];
        }
      } else {
        if (answerVars[2] != 'no') {
          return gifs[6];
        } else {
          return gifs[7];
        }
      }
    }
  }

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
      <div className='flex justify-center'>
        <img onLoad={redirect} src={getGif()} width='408' height='726'></img>
      </div>
    </>
  );
}
