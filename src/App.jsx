import React from "react";
import QuestionaPage from "./Components/Pages/QuestionPage";
import ResultPage from "./Components/Pages/ResultPage";
import Answers from "./Components/Pages/answer/Answers";
import {useGlobalContext} from "./Context/Context";

function App() {
  const {showAnswers} = useGlobalContext();
  return (
    <>
      <div>{showAnswers ? <Answers /> : <QuestionaPage />}</div>
    </>
  );
}

export default App;
