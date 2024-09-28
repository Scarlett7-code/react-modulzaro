import { useState, useEffect } from "react";
import Questions from "./Questions";
import QuizResult from "./QuizResult";

function MyQuizApp() {
  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  // function shuffle(array) {
  //     let currentIndex = array.length;

  //     while (currentIndex != 0) {
  //       let randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex--;
  //       [array[currentIndex],array[randomIndex]] = [
  //         array[randomIndex],array[currentIndex]];
  //     }
  //     console.log("shuffle" ,array)
  //   }

  //   shuffle(questions)

  const handleNextQuestion = () => {
    if (!answer) {
      alert("Select an Answer");
      return;
    }

    if (questions[id].options[0] === answer) {
      setScore(score + 1);
    }

    setAnswer("");
    setId(id + 1);
  };

  const handleRestartQuiz = () => {
    fetch("http://localhost:5000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      });

    setId(0);
    setScore(0);
    setAnswer("");
  };

  if (questions.length == 0) {
    return <div>No question</div>;
  }

  if (id >= questions.length) {
    return (
      <div style={{ width: "50%" }} className="me-auto ms-auto">
        <h1 className="text-center m-4">Quiz Completed</h1>
        <div className="d-flex flex-column justify-content-center border border-secondary  gap-3">
          <QuizResult questions={questions} score={score} />
          <div className="d-flex justify-content-center m-4">
            <button
              className="p-2 btn btn-outline-danger"
              onClick={() => handleRestartQuiz()}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "70%" }} className="me-auto ms-auto">
      <h1 className="text-center m-4">My Quiz App</h1>
      <Questions
        questionsArray={questions[id]}
        setAnswer={setAnswer}
        id={id}
        questions={questions}
      />
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-primary"
          onClick={() => handleNextQuestion()}
        >
          Next Question
        </button>
        <button className="btn btn-success">Add new question</button>
      </div>
    </div>
  );
}

export default MyQuizApp;
