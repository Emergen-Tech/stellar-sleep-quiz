import bullet from '@/images/bullet.svg';
import SatisfactionGuaranteeImage from '@/images/SatisfactionGuaranteeImage.svg';
import TrialSleepLogo from '@/images/TrialSleepLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function ExclusiveOffer() {
  const stellarBenefits = [
    'Start sleeping better in 5-8 minutes a day',
    'Feel well-rested, and rejuvenated every night',
  ];

  return (
    <>
      <div className='w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] bg-[#FFFFFF] '>
        <div className=' bg-[#3b543c] text-left '>
          <div className='p-7 text-[17px] text-[#ffffff] font-bold text-left'>
            Exclusive offer for our partners
          </div>
          <div className='p-7 bg-[#3c544b] text-[17px] text-[#ffffff]'>
            Get lifetime access to Stellar Sleep for only $29 (one-time
            payment). Our program usually costs $45/ month
          </div>
          <div className='bg-[#3b543c] h-5'></div>
        </div>

        <div className='grid p-7 gap-4'>
          <div className='flex gap-4'>
            <div className='flex w-[70px]  items-center justify-center'>
              <Image
                src={TrialSleepLogo}
                alt='trial sleep logo'
                width={200}
                height={200}
                className='w-[70px] object-contain'
              />
            </div>
            <div className='grid w-[80%] gap-2 text-left'>
              {stellarBenefits.map((index) => {
                return (
                  <div key={index} className='flex gap-2 justify-start'>
                    <div className='flex items-center p-0'>
                      <Image
                        src={bullet}
                        alt='bullet point'
                        width={200}
                        height={200}
                        className='w-[25px] h-[25px]'
                      />
                    </div>
                    <div className='text-[17px] font-[300] text-[#2C2B2B]'>
                      {index}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div className="grid w-full p-4 rounded-[10px] bg-[#A9DDCA]">
            <div className="text-[17px] text-center text-[#2C2B2B] font-bold">
              PERSONALIZED TRIAL RESERVED
            </div>
            <div className="text-[16px] font-[300] text-left text-[#2C2B2B]">
              Your personalized trial has been saved for the next 15 minutes!
            </div>
          </div> */}

          {/* <div className="flex items-center justify-center">
            <div>
              <Image
                src={bullet}
                width={100}
                height={100}
                className="w-[30px]"
              />
            </div>
            <div className="text-[17px] text-center text-[#2C2B2B]">
              You’ll have a week to see how Stellar Sleep uses psychology to
              create lasting results.
            </div>
            <div>
              <Image
                src={bullet}
                width={100}
                height={100}
                className="w-[30px]"
              />
            </div>
          </div> */}

          <div className='grid gap-4'>
            <div className='uppercase text-[17px] text-left font-bold text-[#2C2B2B] pb-1'>
              Price Today:
            </div>
            <div className='grid gap-4 border-y-[1px] border-[#000000] py-2'>
              <div className='flex relative'>
                <div className='text-[17px] font-[400] text-center text-[#2C2B2B]'>
                  $29.00
                </div>
                <div className='text-[17px] font-bold flex absolute right-0 text-[#2C2B2B]'>
                  Lifetime Access
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex relative">
            <div className="text-[19px] text-[#2C2B2B] font-bold">
              Total Due Today:
            </div>
            <div className="flex absolute right-0 text-[19px] text-[#42D342] underline font-bold">
              $9.00
            </div>
          </div> */}

          <div className='w-full h-[100px]'>
            <Link
              target={'_blank'}
              href={
                'https://buy.stripe.com/6oEaIA4Ed7H29YQ5kl?prefilled_email=huzaifadsu@gmail.com'
              }>
              <button
                //   onClick={() => handleNextPage()}
                className='bg-[#DE8F6E] font-bold w-full hover:scale-[1.02] hover:transition-all h-[80px] text-white text-[17px] text-center rounded-[10px] my-[20px]'>
                Continue
              </button>
            </Link>
          </div>

          <div className='flex justify-center items-center'>
            <Image
              src={SatisfactionGuaranteeImage}
              alt='satisfaction guarantee'
              width={200}
              height={200}
              className='w-[150px]'
            />
          </div>

          <div className='text-[16px] font-[300] text-[#2C2B2B]'>
            Our promise to you: Cancel anytime. If Stellar Sleep doesn’t work
            for you, get a full refund anytime in the next 30 days.
          </div>
        </div>
      </div>
    </>
  );
}
