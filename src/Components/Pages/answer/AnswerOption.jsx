import React, {useState} from "react";
import {useGlobalContext} from "../../../Context/Context";

function AnswerOption({data}) {
  const {getOption, handleCount} = useGlobalContext();

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
                  handleCount(data.correct === option.answer ? true : false);
                }}
                className=" w-full font-semibold  p-2 rounded-xl text-center  cursor-pointer  bg-amber-400 duration-200 hover:bg-[#4E5340] hover:text-amber-400 hover:ring-2 hover:ring-white">
                {option.answer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default AnswerOption;

// correct or incorrect show
/**
 * <div className="flex justify-center">
          {selectedOption === data?.correct ? (
            <h1 className="bg-green-500 px-4 py-1 text-2xl rounded-xl ">
              Correct
            </h1>
          ) : (
            <>
              <h1 className="bg-red-500 px-4 py-1 text-2xl rounded-xl ">
                Incorrect
              </h1>
              { <h1 className="ml-2 text-2xl text-white py-1">
                Answer is : {data?.correct}
              </h1> }
              </>
              )}
            </div>
 */
