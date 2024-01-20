import React from "react";
import {useGlobalContext} from "../../../Context/Context";

function Answers() {
  const {questionAnswer, playAgain} = useGlobalContext();

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-[#6B5BD4] relative w-[460px] h-[600px] md:w-[900px] md:h-[500px] rounded-2xl shadow-2xl shadow-gray-900/60 overflow-hidden">
          <div className="w-full h-full text-white flex flex-col  items-center">
            <h1 className="text-7xl font-primary mt-3">Answers</h1>
            <div className=" w-full h-[300px] overflow-y-scroll flex flex-col  my-5 gap-3  px-5">
              {questionAnswer.map((i) => (
                <div>
                  <h1 className="text-white text-xl">
                    <span className="underline text-pink-400">Question: </span>
                    {i.data.question}
                  </h1>
                  <h1 className="">
                    <span className="text-xl">Answer: </span>
                    {i.data.correct}
                  </h1>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  playAgain();
                }}
                className="hover:bg-white ring-1 ring-white hover:ring-0 hover:text-black duration-200 font-semibold px-4 py-2 rounded-lg">
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Answers;
