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

export default function AverageSleepResult() {
  const questions = useSelector((state) => state.quiz.questions);
  const dispatch = useDispatch();

  const sexObject = questions.find((i) => i.output.questionVar === 'sex');
  const sex = sexObject.output.answerVar[0];

  const ageObject = questions.find((i) => i.output.questionVar === 'age');
  const age = ageObject.output.answerVar[0];

  const how_long_to_fall_asleepObject = questions.find(
    (i) => i.output.questionVar === 'how_long_to_fall_asleep'
  );
  const how_long_to_fall_asleep =
    how_long_to_fall_asleepObject.output.answerVar[0];

  const latency_from_age_men = {
    '20s': '17.1 min',
    '30s': '17.3 min',
    '40s': '12.1 min',
    '50s': '11.5 min',
    '60s': '12.1 min',
    '+70': '12.3 min',
  };
  const latency_from_age_women = {
    '20s': '14.7 min',
    '30s': '13.7 min',
    '40s': '12.2 min',
    '50s': '12.7 min',
    '60s': '13.6 min',
    '+70': '17.8 min',
  };
  const latency_from_age_other = {
    '20s': '15.9 min',
    '30s': '15.5 min',
    '40s': '12.2 min',
    '50s': '12.1 min',
    '60s': '12.85 min',
    '+70': '15.05 min',
  };

  const averageSleepResult =
    sex === 'male'
      ? latency_from_age_men[age]
      : sex == 'female'
      ? latency_from_age_women[age]
      : latency_from_age_other[age];

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
                priority={true}
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
              <div className='text-[16px] text-[#ffffff]'>
                to fall asleep...
              </div>
            </div>

            <div className='grid gap-2'>
              <div className='text-[20px] text-[#ffffff]'>
                You currently take
              </div>
              <div className='text-[45px] font-bold text-center text-[#7B91DD]'>
                ⏱ {how_long_to_fall_asleep} min
              </div>
              <div className='text-[16px] text-[#ffffff]'>
                to fall asleep...
              </div>
            </div>

            <div className='grid gap-2'>
              <div className='text-[20px] text-[#ffffff]'>
                The average user who completes our program takes
              </div>
              <div className='text-[45px] font-bold text-center text-[#6FCF97]'>
                ⏳ 53 min
              </div>
              <div className='text-[16px] text-[#ffffff]'>
                less time to fall asleep.
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
