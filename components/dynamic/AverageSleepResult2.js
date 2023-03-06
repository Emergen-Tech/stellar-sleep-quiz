import logo from '@/images/logo.png';
import Image from 'next/image';
// import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  setAnswer,
} from '@/reducers/QuizSlice';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import logo from "@/images/logo.png";
import { useEffect } from 'react';

export default function AverageSleepResult2() {
  const questions = useSelector((state) => state.quiz.questions);
  const dispatch = useDispatch();

  const sexObject = questions.find((i) => i.output.questionVar === 'sex');
  const sex = sexObject.output.answerVar[0];

  const ageObject = questions.find((i) => i.output.questionVar === 'age');
  const age = ageObject.output.answerVar[0];

  const time_asleepObject = questions.find(
    (i) => i.output.questionVar === 'time_asleep'
  );
  const time_asleep = time_asleepObject.output.answerVar[0];

  const sleep_duration_from_age_men = {
    '20s': '7.26 hr',
    '30s': '6.97 hr',
    '40s': '6.83 hr',
    '50s': '6.81 hr',
    '60s': '7.24 hr',
    '+70': '7.45 hr',
  };
  const sleep_duration_from_age_women = {
    '20s': '7.17 hr',
    '30s': '6.73 hr',
    '40s': '7.08 hr',
    '50s': '7.10 hr',
    '60s': '7.44 hr',
    '+70': '7.46 hr',
  };
  const sleep_duration_from_age_other = {
    '20s': '7.22 hr',
    '30s': '6.85 hr',
    '40s': '6.96 hr',
    '50s': '6.96 hr',
    '60s': '7.34 hr',
    '+70': '7.46 hr',
  };

  const averageSleepResult =
    sex === 'male'
      ? sleep_duration_from_age_men[age]
      : sex == 'female'
      ? sleep_duration_from_age_women[age]
      : sleep_duration_from_age_other[age];

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(setAnswer([averageSleepResult]));
    dispatch(moveToNextQuestion());
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className='w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] grid justify-center p-5 px-7 bg-[#37533C]'>
        <div className={`w-full grid h-auto space-y-4`}>
          <div className='flex'>
            <div className='w-[25%]'>
              <button
                onClick={() => handlePreviousPage()}
                className=' text-white text-[30px]'>
                <AiOutlineArrowLeft />
              </button>
            </div>
            <div className='flex justify-center'>
              <Image
                src={logo}
                alt='logo'
                width='150'
                height='120'
                className='w-[160px] h-[32px]'
              />
            </div>
          </div>

          <div className='grid space-y-6 justify-center text-center'>
            <div className='grid gap-2'>
              <div className='text-[20px] text-[#ffffff]'>
                The average{' '}
                {sex === 'male' ? 'man' : sex === 'female' ? 'woman' : 'person'}{' '}
                in their {age} sleeps
              </div>
              <div className='text-[50px] font-bold text-center text-[#7B91DD]'>
                ⏱ {averageSleepResult}
              </div>
              <div className='text-[16px] text-[#ffffff]'>per night...</div>
            </div>

            <div className='grid gap-2'>
              <div className='text-[20px] text-[#ffffff]'>
                You currently sleep
              </div>
              <div className='text-[45px] font-bold text-center text-[#7B91DD]'>
                ⏱ {time_asleep} hr
              </div>
              <div className='text-[16px] text-[#ffffff]'>
                on a typical night...
              </div>
            </div>

            <div className='grid gap-2'>
              <div className='text-[20px] text-[#ffffff]'>
                The average user who completes our program sleeps
              </div>
              <div className='text-[45px] font-bold text-center text-[#6FCF97]'>
                ⏳ 74 min
              </div>
              <div className='text-[16px] text-[#ffffff]'>
                more than before, and spends 52% less time awake at night.
              </div>
            </div>
          </div>

          <div className='w-full'>
            <button
              onClick={() => handleNextPage()}
              className='bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
