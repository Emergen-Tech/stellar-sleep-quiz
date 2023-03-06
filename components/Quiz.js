import { moveTopreviousQuestion, setIsVisible } from '@/reducers/QuizSlice';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from './ProgressBar';
import CheckBoxQuiz from './quizTypes/CheckBoxQuiz';
import MultipleChoiceQuiz from './quizTypes/MultipleChoiceQuiz';
import BehavioraltherapyInfo from './static/BehavioraltherapyInfo';
import PsychologyBasedApproach from './static/PsychologyBasedApproach';
import QualitySleepGraph from './static/QualitySleepGraph';
// import Template from "./common/Template";
import { useEffect } from 'react';
import AverageSleepResult from './dynamic/AverageSleepResult';
import AverageSleepResult2 from './dynamic/AverageSleepResult2';
import InsomniaSeverityIndex from './dynamic/InsomniaSeverityIndex';
import Pricing from './dynamic/Pricing';
import StellarGif from './dynamic/StellarGif';
import SuccessRate from './dynamic/SuccessRate';
import Email from './Email';
import TrialPayment from './Pricing/TrialPayment';
import InputFieldQuiz from './quizTypes/InputFieldQuiz';
import AnalyzingPage from './static/AnalyzingPage';
import PersonalizedApproachSleep from './static/PersonalizedApproachSleep';
import SleepHygiene from './static/SleepHygiene';
import SleepingPillsAndStellarSleep from './static/SleepingPillsAndStellarSleepResearch';

export default function Quiz() {
  const dispatch = useDispatch();
  const { questions, currentQuestion, isVisible } = useSelector(
    (state) => state.quiz
  );

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  // function handleNextPage() {
  //   dispatch(moveToNextQuestion());
  // }

  const current = questions[currentQuestion];
  let questionsCount = 0;
  let questionsCompleted = 0;
  for (let i = 0; i < questions.length; ++i) {
    if (
      questions[i].inputType === 'multipleChoice' ||
      questions[i].inputType === 'CheckBox' ||
      questions[i].inputType === 'InputField'
    ) {
      questionsCount++;
      if (i < currentQuestion) questionsCompleted++;
    }
  }
  const loadingPercentage = Math.round(
    (questionsCompleted / questionsCount) * 100
  );

  useEffect(() => {
    setTimeout(() => dispatch(setIsVisible(true)), 0);
  }, [currentQuestion]);

  return (
    <div
      key={currentQuestion}
      className={`bg-transparent transition-all ${
        isVisible
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-10'
      } duration-500 ${
        current?.inputType === 'multipleChoice' ||
        current?.inputType === 'CheckBox' ||
        current?.inputType === 'InputField'
          ? 'w-[350px]'
          : 'w-[400px]'
      }`}>
      {current?.inputType === 'static' ? (
        ''
      ) : current?.inputType === 'dynamic' ? (
        ''
      ) : (
        <div className='grid'>
          <div className='flex gap-5 pr-12 justify-start py-[20px]'>
            {currentQuestion > 0 && (
              <button
                type='button'
                onClick={() => handlePreviousPage()}
                className=' text-white text-[20px]'>
                <AiOutlineArrowLeft />
              </button>
            )}
            <div className='text-[15px] font-bold text-[#FFFFFF]'>
              📋 Understanding your sleep profile
            </div>
          </div>
          <div className='w-[350px]'>
            <ProgressBar progress={loadingPercentage} />
          </div>
        </div>
      )}

      {(() => {
        switch (current?.inputType) {
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
                return <SleepHygiene />;
              case 'sleeping pills':
                return <SleepingPillsAndStellarSleep />;
              case 'analyze':
              default:
                return <AnalyzingPage />;
            }
          case 'dynamic':
            switch (current.typeDynamic) {
              case 'ISI':
                return <InsomniaSeverityIndex />;
              case 'Average Sleep':
                return <AverageSleepResult />;
              case 'Average Sleep 2':
                return <AverageSleepResult2 />;
              case 'success rate':
                return <SuccessRate />;
              case 'email':
                return <Email />;
              case 'gif':
                return <StellarGif />;
              case 'pricing':
                return <Pricing />;
              case 'payment':
                return <TrialPayment />;
              default:
                break;
            }
          default:
            return null;
        }
      }).call()}
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
