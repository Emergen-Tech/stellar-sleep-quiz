import logo from '@/images/logo.png';
import {
  moveToNextQuestion,
  moveTopreviousQuestion,
  updateEmail,
} from '@/reducers/QuizSlice';
import Image from 'next/image';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

export default function Email() {
  const dispatch = useDispatch();
  const { email, utm_term, gclid, promo } = useSelector((state) => state.quiz);

  function handlePreviousPage() {
    dispatch(moveTopreviousQuestion());
  }

  function handleNextPage() {
    dispatch(moveToNextQuestion());
  }

  function handleInputAnswer(value) {
    dispatch(updateEmail(value));
  }

  const allQuestions = useSelector((state) => state.quiz.questions);

  const goal = allQuestions[0].output.answerVar[0];
  const frequently_wake_up = allQuestions[1].output.answerVar[0];
  const isi_1 = allQuestions[3].output.answerVar[0];
  const isi_2 = allQuestions[4].output.answerVar[0];
  const isi_3 = allQuestions[5].output.answerVar[0];
  const isi_4 = allQuestions[6].output.answerVar[0];
  const isi_5 = allQuestions[7].output.answerVar[0];
  const isi_6 = allQuestions[8].output.answerVar[0];
  const isi_7 = allQuestions[9].output.answerVar[0];
  const isi_score = allQuestions[10].output.answerVar[0];
  const isi_label = allQuestions[10].output.answerVar[1];
  const poor_sleep_impact = allQuestions[11].output.answerVar;
  const consequences = allQuestions[12].output.answerVar;
  const sex = allQuestions[15].output.answerVar[0];
  const age = allQuestions[16].output.answerVar[0];
  const how_long_to_fall_asleep = allQuestions[17].output.answerVar[0];
  const average_latency = allQuestions[18].output.answerVar[0];
  const sleep_efficiency_percent = allQuestions[23].output.answerVar[0];
  const time_in_bed = allQuestions[19].output.answerVar[0];
  const time_asleep = allQuestions[20].output.answerVar[0];
  const average_sleep_duration = allQuestions[21].output.answerVar[0];
  const how_long_sleep_problems = allQuestions[22].output.answerVar[0];
  const stressed_thinking_to_go_bed = allQuestions[25].output.answerVar[0];
  const wakeup_middle_night = allQuestions[26].output.answerVar[0];
  const mind_race_in_bed = allQuestions[27].output.answerVar[0];
  const tell_yourself_7_8_hours_buttons = allQuestions[28].output.answerVar[0];
  const sleep_tactics_tried_buttons = allQuestions[29].output.answerVar;

  function handleSubmitResponse() {
    if (email && validateEmail(email)) {
      handleNextPage();
      output();
    }
  }

  function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  // Get prefilled email (if it exists)
  // function Prefilled_Email_Result() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   if (urlParams.has("prefilled_email")) {
  //     return urlParams.get("prefilled_email");
  //   }
  //   return "";
  // }

  // Send all quiz info to API
  function output() {
    // const email = userData.email_address;
    // if (!email) {
    //   email = userData.prefilled_email;
    // }
    // dispatch(setUrlParams({ email: value }));
    const data = {
      date: Date.now(),
      funnel_status: 'completed_quiz',
      promo_code: promo,
      gclid: gclid,
      term: utm_term,
      goal: goal,
      // goal_display: userData.goal_display,
      frequently_wake_up: frequently_wake_up,
      isi_1: isi_1,
      isi_2: isi_2,
      isi_3: isi_3,
      isi_4: isi_4,
      isi_5: isi_5,
      isi_6: isi_6,
      isi_7: isi_7,
      isi_score: isi_score,
      isi_label: isi_label,
      average_sleep_duration: average_sleep_duration,
      average_latency: average_latency,
      sleep_efficiency_percent: sleep_efficiency_percent,
      poor_sleep_impact: poor_sleep_impact,
      consequences: consequences,
      sex: sex,
      // gender_display: userData.gender_display,
      age: age,
      how_long_to_fall_asleep: how_long_to_fall_asleep,
      time_in_bed: time_in_bed,
      time_asleep: time_asleep,
      how_long_sleep_problems: how_long_sleep_problems,
      stressed_thinking_to_go_bed: stressed_thinking_to_go_bed,
      wakeup_middle_night: wakeup_middle_night,
      mind_race_in_bed: mind_race_in_bed,
      tell_yourself_7_8_hours: tell_yourself_7_8_hours_buttons,
      sleep_tactics_tried: sleep_tactics_tried_buttons,
      email: email,
    };
    fetch(
      'https://api-prod-dot-slumberone.uc.r.appspot.com/v1/common/rudder/identify',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    if (!window.rudderanalytics) {
      return;
    }
    window.rudderanalytics.identify(email, data);
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
                priority={true}
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
                <input
                  type='email'
                  value={email}
                  onChange={(e) => handleInputAnswer(e.target.value)}
                  placeholder='Email'
                  required
                  className=' h-[63px] w-full rounded-[11px] text-[#282B2D] font-[700] text-[18px] px-[16px] py-[8px] border-[1px] border-[#dddddd] decoration-inherit transition-colors duration-300 ease-in-out delay-0 '
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmitResponse()}
                />
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
              type='button'
              disabled={!validateEmail(email)}
              onClick={() => handleSubmitResponse()}
              className='bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px] disabled:opacity-50'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
