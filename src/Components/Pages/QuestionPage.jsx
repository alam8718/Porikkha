import React, {useState} from "react";
import AnswerOption from "./answer/answerOption";
import {useGlobalContext} from "../../Context/Context";

function QuestionaPage() {
  const {questionAnswer, handleStart, currentQuestionIndex} =
    useGlobalContext();
  console.log("i am cureent index", currentQuestionIndex);
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-[#454867] relative w-[460px] h-[600px] md:w-[900px] md:h-[500px] rounded-2xl shadow-2xl shadow-gray-900/60 overflow-hidden">
            {/* starting page  */}
            {currentQuestionIndex !== null ? (
              <div>
                <h1 className="text-white text-5xl font-primary text-center my-5">
                  Question
                </h1>
                <p className="absolute top-4 right-4 bg-white px-2 w-[55px] rounded-xl text-justify">
                  12:32
                </p>
                {/* question answer part  */}
                <div>
                  <div className="w-full h-full md:flex md:justify-around px-2 ">
                    {/* answers options  */}
                    <div className="">
                      <AnswerOption
                        data={questionAnswer[currentQuestionIndex]?.data}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full  flex justify-center items-center">
                <h1
                  onClick={() => {
                    handleStart();
                  }}
                  className="w-[100px] h-[100px] font-bold text-2xl hover:ring-2 hover:ring-red-500 duration-300 cursor-pointer  flex justify-center items-center rounded-full bg-gradient-to-tl to-gray-200 via-green-400 from-green-700 ">
                  Start
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionaPage;
