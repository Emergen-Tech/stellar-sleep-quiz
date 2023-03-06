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
import SuccessRateImage from '@/images/success_rate.png';
import { useEffect } from 'react';

export default function SuccessRate() {
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

  const time_in_bedObject = questions.find(
    (i) => i.output.questionVar === 'time_in_bed'
  );
  const time_in_bed = time_in_bedObject.output.answerVar[0];

  const how_long_to_fall_asleepObject = questions.find(
    (i) => i.output.questionVar === 'how_long_to_fall_asleep'
  );
  const how_long_to_fall_asleep =
    how_long_to_fall_asleepObject.output.answerVar[0];

  const sleep_efficiency =
    Math.min(time_asleep, time_in_bed) / Math.max(time_in_bed, time_asleep);

  const sleep_efficiency_percentage = (sleep_efficiency * 100).toFixed(0) + '%';

  const SuccessRateResult =
    sleep_efficiency <= 0.65
      ? '87%'
      : how_long_to_fall_asleep >= 50
      ? '85%'
      : '83%';

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(setAnswer([SuccessRateResult]));
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
          {sleep_efficiency >= 0.8 && how_long_to_fall_asleep < 20 ? (
            <div className='grid gap-4'>
              <div className='text-[#ffffff] text-[20px]'>
                Based on your input, it sounds like you might be getting pretty
                good sleep already!
              </div>
              <div className='text-[#ffffff] text-[20px]'>
                We recommend you to continue with your current sleep habits, but
                if you'd like to optimize your sleep even furtherm you can give
                us a try.
              </div>
              <div className='grid'>
                <div className='text-left text-[#ffffff] text-[13px] grid'>
                  <div>
                    <span className='font-bold'>Your sleep latency:</span> min.
                  </div>
                  <div>
                    <span className='font-bold'>Your sleep efficiency:</span>{' '}
                    _error%
                  </div>
                </div>
                <div>
                  <Image
                    src={SuccessRateImage}
                    width={200}
                    height={200}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='grid gap-4'>
              <div className='text-[#ffffff] text-[20px]'>
                You're a good fit! Stellar Sleep was designed for people like
                you.
              </div>
              <div className='text-[#ffffff] text-[20px]'>
                Our success rate for{' '}
                {sex === 'male' ? 'men' : sex === 'female' ? 'women' : 'people'}{' '}
                in their {age} with your sleep profile is {SuccessRateResult}.
              </div>
              <div className='grid'>
                <div className='text-left text-[#ffffff] text-[12px] grid'>
                  <div>
                    <span className='font-bold'>Your sleep latency:</span>{' '}
                    {how_long_to_fall_asleep} min.
                  </div>
                  <div>
                    <span className='font-bold'>Your sleep efficiency:</span>{' '}
                    {sleep_efficiency_percentage}
                  </div>
                </div>
                <div>
                  <Image
                    src={SuccessRateImage}
                    width={200}
                    height={200}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          )}
          <div className='grid space-y-6 justify-center text-center'></div>

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
