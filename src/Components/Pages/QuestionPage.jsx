import React, {useState} from "react";
import AnswerOption from "./answer/answerOption";
import {useGlobalContext} from "../../Context/Context";
import ResultPage from "./ResultPage";

function QuestionaPage() {
  const {
    questionAnswer,
    handleStart,
    currentQuestionIndex,
    start,
    TotalNumQuestion,
  } = useGlobalContext();
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-[#4E5340] ring-1 ring-white relative w-[460px] h-[600px] md:w-[900px] md:h-[500px] rounded-2xl overflow-hidden">
            {/* starting page  */}
            {start === false && (
              <div className="w-full h-full  flex justify-center items-center">
                <div
                  onClick={() => {
                    handleStart();
                  }}
                  className="w-[400px] h-[400px] font-bold text-6xl hover:ring-2 hover:ring-white duration-200 cursor-pointer  flex justify-center items-center rounded-full  bg-[#E6AF2E] hover:text-[#E6AF2E] hover:bg-black ">
                  <h1 className="font-bold text-6xl cursor-pointer flex justify-center items-center">
                    Start Exam
                  </h1>
                </div>
              </div>
            )}

            {currentQuestionIndex !== null ? (
              <div>
                <h1 className="text-white text-5xl font-primary text-center my-5">
                  Question
                </h1>
                <p className="absolute top-4 right-4 bg-white px-2 w-[55px] rounded-xl text-justify">
                  {`${currentQuestionIndex + 1}/${TotalNumQuestion}`}
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
              <div>
                <ResultPage />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionaPage;
