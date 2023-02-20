import TrialPricingArrow from "@/images/TrialPricingArrow.svg";
import Image from "next/image";
import { useState } from "react";

export default function TrialPricing() {
  const priceButton = ["$0.99", "$3", "$9", "$18.37"];
  const [Pricing, setPricing] = useState();

  function handleSelectPricing(selectedOption) {
    setPricing(selectedOption);
  }

  return (
    <>
      <div className="w-[400px] max-w-[100%] min-h-[100vh] max-h-[100%] bg-[#FFFFFF] ">
        <div className="p-7 pb-5 bg-[#F6F4EE] grid gap-5">
          <div className="text-[35px] text-[#000000] font-bold text-left">
            Try us for 1 week.
          </div>
          <div className="text-[18px] text-[#000000] font-[300]">
            Money shouldn’t stand in the way of finding a sleep program that
            finally works for you, especially in light of the global health
            crisis.
          </div>
          <div className="text-[18px] text-[#000000] font-[300]">
            <span className="font-bold">
              It costs us approximately $9 to offer a 1 week trial.
            </span>{" "}
            Please pick an amount that’s reasonable to you.
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-7 grid gap-5">
          <div className="text-[20px] pr-5 text-[#000000] font-bold text-left">
            Choose a price for your 1-week trial.
          </div>
          <div className="flex gap-1 w-full flex-wrap">
            {priceButton.map((index) => {
              return (
                <button
                  key={index}
                  className={`w-[24%] h-[50px] flex justify-center items-center rounded-[10px] bg-[#F6F4EE] hover:scale-[1.02] transition-all ${
                    Pricing === index ? "bg-[#E4DECE]" : ""
                  }`}
                  onClick={() => handleSelectPricing(index)}
                >
                  {index}
                </button>
              );
            })}
          </div>
          <div className="flex gap-0">
            <div className="text-[12px] text-[#424242] w-[86%]">
              This option will help us support those who need to select the
              lowest trial prices!
            </div>
            <div className="">
              <Image
                src={TrialPricingArrow}
                alt="Trial Pricing Arrow"
                width={35}
                height={25}
                className="w-[30px] flex justify-center items-center"
              />
            </div>
          </div>

          <div className="w-full h-[100px]">
            <button
              //   onClick={() => handleNextPage()}
              className="bg-[#DE8F6E] w-full h-[70px] text-white text-[20px] text-center rounded-[10px] my-[20px]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
