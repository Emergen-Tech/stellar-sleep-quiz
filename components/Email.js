import logo from '@/images/logo.png';
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  setUrlParams,
} from '@/reducers/QuizSlice';
import Image from 'next/image';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

export default function Email() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.quiz.email);

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }

  function handleInputAnswer(value) {
    dispatch(setUrlParams({ email: value }));
  }

  function handleSubmitResponse() {
    if (email) {
      handleNextPage();
    }
  }

  return (
    <>
      <div className='w-[400px] max-w-[100%] min-h-[100vh] max-h-auto grid justify-center p-5 px-7 bg-[#37533C] overflow-y-auto'>
        <div className='w-full grid gap-1'>
          <div className='flex '>
            <div className='w-[25%]'>
              <button
                // type="button"
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
                className='w-[140px] h-[32px]'
              />
            </div>
          </div>
          <div className='grid gap-2 justify-center px-3'>
            <div className='text-[20px] text-[#ffffff] font-bold'>
              We’ve built you a custom sleep plan. Enter your email to see your
              sleep plan.
            </div>
            <div className='grid gap-1'>
              <div>
                {' '}
                <form>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => handleInputAnswer(e.target.value)}
                    placeholder='Email'
                    required
                    className=' h-[63px] w-full rounded-[11px] text-[#282B2D] font-[700] text-[18px] px-[16px] py-[8px] border-[1px] border-[#dddddd] decoration-inherit transition-colors duration-300 ease-in-out delay-0 '
                  />
                </form>
              </div>
              <div className='text-[17px] text-[#ffffff]'>
                Stellar Sleep ensures the confidentiality of your personal
                information. We’ll email you a copy of your results for
                convenient access.
              </div>
            </div>
          </div>

          <div className='w-full h-[100px]'>
            <button
              onClick={handleSubmitResponse}
              className='bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
