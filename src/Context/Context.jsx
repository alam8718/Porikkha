import {createContext, useContext, useState} from "react";

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
    {
      data: {
        question: "JavaScript is a ____ language?",
        options: [
          {answer: "Object-oriented"},
          {answer: "Object-based"},
          {answer: "Procedural"},
          {answer: "None of the above"},
        ],
        correct: "Object-oriented",
      },
    },
    {
      data: {
        question:
          "Which of the following keywords is used to define a variable in Javascript?",
        options: [
          {answer: "var"},
          {answer: "let"},
          {answer: "Both var and let"},
          {answer: "None of the above"},
        ],
        correct: "Both var and let",
      },
    },
    {
      data: {
        question: "How can a datatype be declared to be a constant type?",
        options: [
          {answer: "const"},
          {answer: "var"},
          {answer: "let"},
          {answer: "constant"},
        ],
        correct: "const",
      },
    },
    {
      data: {
        question:
          "What keyword is used to check whether a given property is valid or not?",
        options: [
          {answer: "in"},
          {answer: "is in"},
          {answer: "exists"},
          {answer: "lies"},
        ],
        correct: "in",
      },
    },
    {
      data: {
        question: "What is the use of the <noscript> tag in Javascript?",
        options: [
          {answer: "Contents are displayed by non-JS based browsers"},
          {answer: "Clear all the cookies and cache"},
          {answer: "Both"},
          {answer: "None of the above"},
        ],
        correct: "Contents are displayed by non-JS based browsers",
      },
    },
  ];
  const [selectedOption, setSelectedOptiion] = useState(null);
  const [start, setStart] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const TotalNumQuestion = questionAnswer.length;

  // starting the quiz
  const handleStart = () => {
    setStart(true);
    setCurrentQuestionIndex(0);
  };

  //for next question functionality
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };
  //for next question functionality ends

  //getting the selected option
  const getOption = (userOption) => {
    setSelectedOptiion(userOption);
    if (currentQuestionIndex < TotalNumQuestion - 1) {
      handleNextQuestion();
    } else {
      setCurrentQuestionIndex(null);
    }
  };
  const handleCount = (value) => {
    if (value) {
      setCorrect((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }
  };

  //play again
  const playAgain = () => {
    setStart(false);
    setCorrect(0);
    setWrong(0);
    setShowAnswers(false);
  };
  const handleAnswers = () => {
    setShowAnswers(true);
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
        TotalNumQuestion,
        start,
        setStart,
        playAgain,
        handleCount,
        correct,
        wrong,
        handleAnswers,
        showAnswers,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
