import TrialSleepLogo from "@/images/TrialSleepLogo.svg";
import Image from "next/image";
import bullet from "@/images/bullet.svg";
import SatisfactionGuaranteeImage from "@/images/SatisfactionGuaranteeImage.svg";

export default function TrialDetails() {
  const stellarBenefits = [
    "Start sleeping better in 5-8 minutes a day",
    "Fall asleep faster",
    "Feel well-rested, and rejuvenated every night",
  ];
  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] bg-[#FFFFFF] ">
        <div className="p-7 bg-[#F6F4EE] text-[17px] text-[#2C2B2B] font-bold text-left">
          syedmuhammedabbas@gmail.com
        </div>

        <div className="grid p-7 gap-4">
          <div className="flex gap-4">
            <div className="flex w-[70px]  items-center justify-center">
              <Image
                src={TrialSleepLogo}
                width={200}
                height={200}
                className="w-[70px] object-contain"
              />
            </div>
            <div className="grid w-[80%] gap-2 text-left">
              {stellarBenefits.map((index) => {
                return (
                  <div className="flex gap-2 justify-start">
                    <div className="flex items-center p-0">
                      <Image
                        src={bullet}
                        width={200}
                        height={200}
                        className="w-[25px] h-[25px]"
                      />
                    </div>
                    <div className="text-[17px] font-[300] text-[#2C2B2B]">
                      {index}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid w-full p-4 rounded-[10px] bg-[#A9DDCA]">
            <div className="text-[17px] text-center text-[#2C2B2B] font-bold">
              PERSONALIZED TRIAL RESERVED
            </div>
            <div className="text-[16px] font-[300] text-left text-[#2C2B2B]">
              Your personalized trial has been saved for the next 15 minutes!
            </div>
          </div>

          <div className="flex items-center justify-center">
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
          </div>

          <div className="grid gap-4">
            <div className="text-[17px] text-left font-bold text-[#2C2B2B] border-b-[1px] border-[#2C2B2B] pb-1">
              Price After Trial
            </div>
            <div className="grid gap-4">
              <div className="flex relative">
                <div className="text-[17px] font-[400] text-center text-[#2C2B2B]">
                  3-Month Plan
                </div>
                <div className="text-[17px] font-bold flex absolute right-0 text-[#2C2B2B]">
                  $1.46/day
                </div>
              </div>
              <div className="flex relative">
                <div className="text-[12px] font-bold text-center text-[#ffffff] bg-[#37533C] rounded-[20px] py-1 px-2">
                  30% OFF
                </div>
                <div className="text-[14px] font-[300] flex items-center absolute right-0 text-[#2C2B2B]">
                  ($131.81 for 90 days)
                </div>
              </div>
            </div>
            <div className="border-b-[1px] flex justify-center pb-2 border-[#2C2B2B] text-[13px] text-[#2C2B2B]">
              <span className="text-[13px] text-[#2C2B2B] font-bold">
                PROMO APPLIED:
              </span>{" "}
              You’re saving an additional $56.49.
            </div>
          </div>

          <div className="flex relative">
            <div className="text-[19px] text-[#2C2B2B] font-bold">
              Total Due Today:
            </div>
            <div className="flex absolute right-0 text-[19px] text-[#42D342] underline font-bold">
              $9.00
            </div>
          </div>

          <div className="w-full h-[100px]">
            <button
              //   onClick={() => handleNextPage()}
              className="bg-[#DE8F6E] font-bold w-full hover:scale-[1.02] hover:transition-all h-[80px] text-white text-[17px] text-center rounded-[10px] my-[20px]"
            >
              Continue
            </button>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src={SatisfactionGuaranteeImage}
              width={200}
              height={200}
              className="w-[150px]"
            />
          </div>

          <div className="text-[16px] font-[300] text-[#2C2B2B] font-[300]">
            <span className="text-[17px] text-[#7C7C7C] font-bold">
              Our promise to you:
            </span>{" "}
            Cancel anytime. If Stellar Sleep doesn’t work for you, get a full
            refund anytime in the next 30 days.
          </div>
        </div>
      </div>
    </>
  );
}
