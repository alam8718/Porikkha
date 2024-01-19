import React, {useState} from "react";
import {useGlobalContext} from "../../../Context/Context";

function AnswerOption({data}) {
  const {selectedOption, setSelectedOptiion, currentQuestionIndex, getOption} =
    useGlobalContext();
  console.log("i am current question index ", currentQuestionIndex);

  return (
    <>
      <div>
        <div className="p-4 flex flex-col items-center md:flex-row md:gap-16   w-full h-full">
          <h1 className="w-[400px] text-3xl md:text-5xl leading-8 mb-10 text-white px-5 text-center">
            {data?.question}
          </h1>
          <ul className="my-5 gap-8 flex flex-col w-[400px] h-full">
            {data?.options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  getOption(option.answer);
                }}
                className={` w-full font-semibold  p-2 rounded-xl text-center  cursor-pointer  ${
                  selectedOption === option.answer
                    ? "bg-gray-300 ring-2 ring-amber-500"
                    : "bg-purple-400"
                }`}>
                {option.answer}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          {selectedOption === data?.correct ? (
            <h1 className="bg-green-500 px-4 py-1 text-2xl rounded-xl ">
              Correct
            </h1>
          ) : (
            <>
              <h1 className="bg-red-500 px-4 py-1 text-2xl rounded-xl ">
                Incorrect
              </h1>
              <h1 className="ml-2 text-2xl text-white py-1">
                Answer is : {data?.correct}
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AnswerOption;
