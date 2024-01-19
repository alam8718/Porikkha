import {createContext, useContext, useEffect, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

  const questionAnswer = [
    {
      data: {
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        options: [
          {answer: "stringify()"},
          {answer: "parse()"},
          {answer: "convert()"},
          {answer: "None of the above"},
        ],
        correct: "stringify()",
      },
    },
    {
      data: {
        question: "Which of the following are closures in Javascript ?",
        options: [
          {answer: "Variables"},
          {answer: "Functions"},
          {answer: "Objects"},
          {answer: "All of the above"},
        ],
        correct: "All of the above",
      },
    },
    {
      data: {
        question: "Which of the following is not a Javascript framework?",
        options: [
          {answer: "Node"},
          {answer: "Vue"},
          {answer: "React"},
          {answer: "Cassandra"},
        ],
        correct: "Cassandra",
      },
    },
    {
      data: {
        question:
          "What keyword is used to declare an asynchronous function in Javascript?",
        options: [
          {answer: "async"},
          {answer: "await"},
          {answer: "setTimeout"},
          {answer: "None of the above"},
        ],
        correct: "async",
      },
    },
    {
      data: {
        question: "How to stop an interval timer in Javascript?",
        options: [
          {answer: "clearTimer"},
          {answer: "intervalOver"},
          {answer: "clearInterval"},
          {answer: "None of the above"},
        ],
        correct: "clearInterval",
      },
    },
  ];
  const [selectedOption, setSelectedOptiion] = useState(null);
  const [timer, setTimer] = useState(null);
  // starting the quiz
  const handleStart = () => {
    setCurrentQuestionIndex(0);
  };

  //for next question functionality

  useEffect(() => {
    if (currentQuestionIndex !== null) {
      if (currentQuestionIndex < 5) {
        const quizTimer = setTimeout(() => {
          handleNextQuestion();
        }, 4000);
        setTimer(quizTimer);
      } else {
        setCurrentQuestionIndex(null);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentQuestionIndex]);

  //for next question functionality ends
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  //getting the selected option
  const getOption = (userOption) => {
    setSelectedOptiion(userOption);
  };

  return (
    <AppContext.Provider
      value={{
        selectedOption,
        setSelectedOptiion,
        currentQuestionIndex,
        getOption,
        questionAnswer,
        handleNextQuestion,
        handleStart,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
