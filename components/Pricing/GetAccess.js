import bullet from '@/images/bullet.svg';
import TrialSleepLogo from '@/images/TrialSleepLogo.svg';
import Image from 'next/image';
// import SatisfactionGuaranteeImage from "@/images/SatisfactionGuaranteeImage.svg";
import AppStoreImage from '@/images/app_store.png';
import GooglePlayImage from '@/images/google_play.png';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function PartnerAccess() {
  const stellarBenefits = [
    'Start sleeping better in 5-8 minutes a day',
    'Feel well-rested, and rejuvenated every night',
  ];
  const promo = useSelector((state) => state.quiz.promo);

  return (
    <>
      <div className='w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] bg-[#FFFFFF] '>
        <div className=' bg-[#3b543c] text-left grid gap-5 p-7'>
          <div className=' text-[17px] text-[#ffffff] font-bold text-left'>
            Welcome to Stellar Sleep
          </div>
          <div className=' text-[15px] text-[#ffffff]'>
            As one of our special partners, you're receiving free access to
            Stellar Sleep. Follow the instructions below to get access.
          </div>
          <div className=' text-[15px] text-[#ffffff]'>
            Note: This is a private page for Stellar Sleep partners only. Please
            do not share this page with others.
          </div>
        </div>

        <div className='grid p-7 gap-4'>
          <div className='flex gap-4'>
            <div className='flex w-[70px]  items-center justify-center'>
              <Image
                priority={true}
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
                        priority={true}
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

          <div className='grid justify-center w-full p-4 rounded-[10px] bg-[#A9DDCA]'>
            <div className='text-[15px] grid gap-2 text-center text-[#2C2B2B] font-bold'>
              <div>1. Download App</div>
              <div className='grid justify-center'>
                <Link
                  href={
                    'https://apps.apple.com/us/app/slumber-one/id1602312365'
                  }
                  target={'_blank'}>
                  <Image
                    priority={true}
                    src={AppStoreImage}
                    alt='appstore image'
                    width={200}
                    height={200}
                    className='ml-4 w-[170px]'
                  />
                </Link>
                <Link
                  href={
                    'https://play.google.com/store/apps/details?id=one.slumber.client'
                  }
                  target={'_blank'}>
                  <Image
                    priority={true}
                    src={GooglePlayImage}
                    alt='Google play image'
                    width={200}
                    height={200}
                    className='w-[200px]'
                  />
                </Link>
              </div>
              <div>
                <div className='text-[15px] text-center text-[#2C2B2B] font-bold'>
                  2. Enter Your Access Code
                </div>
                <div className=' text-[15px] font-light'>
                  After you sign up in the app, please enter the access code
                  below (no spaces). You will not receive an access code via
                  email.
                </div>
                <div className='text-[15px] text-center text-[#2C2B2B] font-bold italic'>
                  {promo}
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div>
              <Image
                priority={true}
                src={bullet}
                width={100}
                height={100}
                className='w-[30px]'
              />
            </div>
            <div className='text-[17px] text-center text-[#2C2B2B]'>
              Feel free to email us at support@stellarsleep.com if you have any
              questions along the way.
            </div>
            <div>
              <Image
                priority={true}
                src={bullet}
                width={100}
                height={100}
                className='w-[30px]'
              />
            </div>
          </div>

          {/* <div className="grid gap-4">
            <div className="uppercase text-[17px] text-left font-bold text-[#2C2B2B] pb-1">
              Price Today:
            </div>
            <div className="grid gap-4 border-y-[1px] border-[#000000] py-2">
              <div className="flex relative">
                <div className="text-[17px] font-[400] text-center text-[#2C2B2B]">
                  $29.00
                </div>
                <div className="text-[17px] font-bold flex absolute right-0 text-[#2C2B2B]">
                  Lifetime Access
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="flex relative">
            <div className="text-[19px] text-[#2C2B2B] font-bold">
              Total Due Today:
            </div>
            <div className="flex absolute right-0 text-[19px] text-[#42D342] underline font-bold">
              $9.00
            </div>
          </div> */}

          {/* <div className="w-full h-[100px]">
            <button
              //   onClick={() => handleNextPage()}
              className="bg-[#DE8F6E] font-bold w-full hover:scale-[1.02] hover:transition-all h-[80px] text-white text-[17px] text-center rounded-[10px] my-[20px]"
            >
              Continue
            </button>
          </div> */}

          {/* <div className="flex justify-center items-center">
            <Image
              src={SatisfactionGuaranteeImage}
              alt="satisfaction guarantee"
              width={200}
              height={200}
              className="w-[150px]"
            />
          </div> */}

          {/* <div className="text-[16px] font-[300] text-[#2C2B2B]">
            Our promise to you: Cancel anytime. If Stellar Sleep doesn’t work
            for you, get a full refund anytime in the next 30 days.
          </div> */}
        </div>
      </div>
    </>
  );
}
