// import ProgressBar from "./ProgressBar";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
} from '@/reducers/QuizSlice';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxQuiz from './quizTypes/CheckBoxQuiz';
import MultipleChoiceQuiz from './quizTypes/MultipleChoiceQuiz';
import BehavioraltherapyInfo from './static/BehavioraltherapyInfo';
import PsychologyBasedApproach from './static/PsychologyBasedApproach';
import QualitySleepGraph from './static/QualitySleepGraph';
// import Template from "./common/Template";
import AverageSleepResult from './dynamic/AverageSleepResult';
import AverageSleepResult2 from './dynamic/AverageSleepResult2';
import InsomniaSeverityIndex from './dynamic/InsomniaSeverityIndex';
import SuccessRate from './dynamic/SuccessRate';
import InputFieldQuiz from './quizTypes/InputFieldQuiz';
import AnalyzingPage from './static/AnalyzingPage';
import PersonalizedApproachSleep from './static/PersonalizedApproachSleep';
import SleepHygiene from './static/SleepHygiene';
import SleepingPillsAndStellarSleep from './static/SleepingPillsAndStellarSleepResearch';

export default function Quiz() {
  const dispatch = useDispatch();
  const { questions, currentQuestion } = useSelector((state) => state.quiz);

  const current = questions[currentQuestion];

  // const currentAnswer = useSelector(
  //   (state) => state.quiz.questions[state.quiz.currentQuestion].output.answerVar
  // );

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }

  // console.log(multipleChoiceResponses, "mcqs");

  // condition for sleep hygiene and sleep pills screens
  // const sleep_hygiene = [
  //   'meditation',
  //   'melatonin',
  //   'cutting_coffee_in_the_afternoon',
  //   'reducing_screen_time_at_night',
  // ];
  // const sleep_pills = 'prescription_sleeping_pills';

  // const sleep_improvement_strategies_attempted = questions.find(
  //   (i) => i.output.questionVar === 'sleep_improvement_strategies_attempted'
  // ).output.answerVar;

  return (
    <div className='bg-transparent p-4 w-[400px]'>
      {current?.inputType === 'static' ? (
        ''
      ) : current?.inputType === 'dynamic' ? (
        ''
      ) : (
        <div className='flex gap-8 pr-16 justify-center py-[20px]'>
          {currentQuestion > 0 && (
            <button
              type='button'
              onClick={() => handlePreviousPage()}
              className=' text-white text-[20px]'>
              <AiOutlineArrowLeft />
            </button>
          )}
          <div className='text-[15px] text-[#FFFFFF]'>
            📋 Understanding your sleep profile
          </div>
        </div>
      )}

      {(() => {
        if (current)
          switch (current.inputType) {
            case 'multipleChoice':
              return <MultipleChoiceQuiz />;
            case 'CheckBox':
              return <CheckBoxQuiz />;
            case 'InputField':
              return <InputFieldQuiz />;
            case 'static':
              switch (current.typeStatic) {
                case 'behavioral therapy static page':
                  return <BehavioraltherapyInfo />;
                case 'Quality sleep':
                  return <QualitySleepGraph />;
                case 'psychology-based approach':
                  return <PsychologyBasedApproach />;
                case 'personalized approach sleep':
                  return <PersonalizedApproachSleep />;
                case 'sleep hygiene':
                  // if (
                  //   sleep_improvement_strategies_attempted.some(
                  //     (optionIncluded) => sleep_hygiene.includes(optionIncluded)
                  //   )
                  // ) {
                  return <SleepHygiene />;
                // } else {
                //   handleNextPage();
                // }
                case 'sleeping pills':
                  // if (
                  //   sleep_improvement_strategies_attempted.includes(sleep_pills)
                  // ) {
                  return <SleepingPillsAndStellarSleep />;
                // } else {
                //   handleNextPage();
                // }
                case 'analyze':
                  return <AnalyzingPage />;
                default:
                  break;
              }
            // if (current.typeStatic === 'behavioral therapy static page') {
            //   return <BehavioraltherapyInfo />;
            // } else if (current.typeStatic === 'Quality sleep') {
            //   return <QualitySleepGraph />;
            // } else if (current.typeStatic === 'psychology-based approach') {
            //   return <PsychologyBasedApproach />;
            // } else if (current.typeStatic === 'personalized approach sleep') {
            //   return <PersonalizedApproachSleep />;
            // } else if (
            //   current.typeStatic ===
            //   'sleep hygiene or sleep pills and stellar sleep research'
            // ) {
            //   if (
            //     sleep_improvement_strategies_attempted.length === 1 &&
            //     sleep_improvement_strategies_attempted[0] === sleep_pills
            //   ) {
            //     return <SleepingPillsAndStellarSleep />;
            //   } else if (
            //     sleep_improvement_strategies_attempted.some(
            //       (optionIncluded) => sleep_hygiene.includes(optionIncluded)
            //     )
            //   ) {
            //     return <SleepHygiene />;
            //   } else if (
            //     sleep_improvement_strategies_attempted[0] ===
            //     'none_of_the_above'
            //   ) {
            //     return <AnalyzingPage />;
            //   }
            // sleep_improvement_strategies_attempted.length === 1 &&
            // sleep_improvement_strategies_attempted[0] === sleep_pills ? (
            //   <SleepingPillsAndStellarSleep />
            // ) : sleep_improvement_strategies_attempted.some(
            //     (optionIncluded) => sleep_hygiene.includes(optionIncluded)
            //   ) ? (
            //   <SleepHygiene />
            // ) : (
            //   sleep_improvement_strategies_attempted[0] ===
            //     "none_of_the_above" && <AnalyzingPage />
            // );
            // }
            case 'dynamic':
              if (current.typeDynamic === 'ISI') {
                return <InsomniaSeverityIndex />;
              } else if (current.typeDynamic === 'Average Sleep') {
                return <AverageSleepResult />;
              } else if (current.typeDynamic === 'Average Sleep 2') {
                return <AverageSleepResult2 />;
              } else if (current.typeDynamic === 'success rate') {
                return <SuccessRate />;
              }
            default:
              return null;
          }
      })()}
      {/* {current.inputType !== ("static" || "dynamic") && (
        <div className="w-[350px]">
          <button
            onClick={() => handleNextPage()}
            className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}
