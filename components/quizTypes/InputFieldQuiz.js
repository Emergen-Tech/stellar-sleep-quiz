import { moveToNextQuestion, setAnswer } from '@/reducers/QuizSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function InputFieldQuiz() {
  const current = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestion]
  );
  const id = current.id;
  const question = current.question;
  const unit = current.unit;
  const dispatch = useDispatch();

  function handleInputAnswer(value) {
    dispatch(setAnswer([value]));
  }

  function handleSubmitResponse() {
    if (currentAnswerVar) {
      dispatch(moveToNextQuestion());
    }
  }

  const currentAnswerVar =
    current.output.answerVar.length > 0 ? current.output.answerVar[0] : '';

  const placeholder = current.placeholder;
  const page_name = question.page_name;

  const props = {
    step: { page_name },
    flowId: 'savvy',
  };
  if (
    typeof window !== 'undefined' &&
    window.rudderanalytics &&
    typeof window.rudderanalytics.track === 'function'
  ) {
    window.rudderanalytics.track(`start sleep quiz`, props);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      // Navigate to the next page
      if (currentAnswerVar) {
        dispatch(moveToNextQuestion());
      }
    }
  }

  return (
    <>
      <div className={`w-[350px]`}>
        <h1 className='text-[25px] text-[#ffffff] py-4'>{question}</h1>
        <div className='flex gap-2'>
          <div>
            <div>
              <input
                type='number'
                placeholder={placeholder}
                value={currentAnswerVar}
                onChange={(e) => handleInputAnswer(e.target.value)}
                required
                className=' h-[63px] placeholder:text-[20px] placeholder:font-bold placeholder:text-[#858585] rounded-[11px] text-[#282B2D] font-[700] text-[18px] px-[16px] py-[8px] border-[1px] border-[#dddddd] decoration-inherit transition-colors duration-300 ease-in-out delay-0 '
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <div className='text-[17px] text-[#ffffff] flex items-center'>
            {unit}
          </div>
        </div>
        <div className='w-[350px]'>
          <button
            onClick={() => handleSubmitResponse()}
            className='bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]'>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
