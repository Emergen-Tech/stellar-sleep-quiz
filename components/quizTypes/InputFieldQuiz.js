import React, { useState } from "react";

export default function InputFieldQuiz() {
  return (
    <>
      {current.type === "question" && (
        <div className="w-[350px]">
          <h1 className="text-[25px] text-[#ffffff] py-4">
            {current.question}
          </h1>
          <div className="grid gap-2">
            {current.options.map((option) => (
              <div key={option} className="mb-2">
                <button
                  onClick={() => handleOptionClick(option)}
                  value={option}
                  className={`w-full text-center ${
                    selectedOption === option ? "bg-[#769E7D]" : "bg-[#37533C]"
                  }   hover:scale-[1.02] transition-all h-[60px] rounded-[10px] text-[20px] text-[#ffffff]`}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
