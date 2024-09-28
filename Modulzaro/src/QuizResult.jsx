function QuizResult({score, questions}) {

  const result = (score / questions.length) * 100;
  console.log(score);
  console.log(questions.length);
  console.log(result);
  if (result >= 80) {
    return (
      <div className="d-flex flex-column align-items-center p-4 gap-3 ">
        <h5 className="rounded-5 bg-success p-3">Congratulations!</h5>
        <h5>Your final score:</h5>
        <h1>{result}%</h1>
      </div>
    );
  } else if (result >= 50) {
    return (
      <div className="d-flex flex-column align-items-center p-4 gap-3">
        <h5 className="rounded-5 bg-warning p-3">Not bad!</h5>
        <h5>Your final score:</h5>
        <h1>{result}%</h1>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center p-4 gap-3">
        <h5 className="rounded-5 bg-danger p-3" >You can do better!</h5>
        <h5>Your final score:</h5>
        <h1>{result}%</h1>
      </div>
    );
  }
}

export default QuizResult;
