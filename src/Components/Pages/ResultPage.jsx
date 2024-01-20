import React from "react";
import {useGlobalContext} from "../../Context/Context";

function ResultPage() {
  const {TotalNumQuestion, playAgain, correct, wrong, handleAnswers} =
    useGlobalContext();
  return (
    <>
      <div className="w-full h-screen">
        <div className=" ">
          <div className="bg-[#6B5BD4] relative w-[460px] h-[600px] md:w-[900px] md:h-[500px] rounded-2xl shadow-2xl shadow-gray-900/60 overflow-hidden">
            <div className="w-full h-full text-white flex flex-col gap-10 items-center">
              <h1 className="text-7xl font-primary mt-3">Result</h1>
              <div className=" w-full flex flex-col items-center justify-center gap-6 text-4xl my-10">
                <h1>Total Question: {TotalNumQuestion}</h1>
                <h1>
                  Correct Answers:
                  <span className="text-green-400">{correct}</span>
                </h1>
                <h1>
                  Wrong Answers: <span className="text-red-500">{wrong}</span>
                </h1>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    playAgain();
                  }}
                  className="hover:bg-white ring-1 ring-white hover:ring-0 hover:text-black duration-200 font-semibold px-4 py-2 rounded-lg">
                  Play Again
                </button>
                <button
                  onClick={() => handleAnswers()}
                  className="hover:bg-green-500 ring-2 ring-amber-500 hover:ring-0 text-amber-500 hover:text-white duration-200 font-semibold px-4 py-2 rounded-lg">
                  Answers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
