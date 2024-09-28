

function Questions({ questionsArray, setAnswer, id, questions }) {

  return (
    <div className="d-flex flex-column justify-content-center m-4 p-4 border border-secondary  gap-3">
      <div className="d-flex flex-column pb-2 pt-2 gap-2 border border-secondary bg-secondary bg-opacity-25 border-start-0 ">
        <div>
          <h2>Question Category: {questionsArray.category}</h2>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar"
            style={{ width: `${(questions.length / 100) * (id + 1) * 10}%` }}
          >
            {id + 1}/{questions.length}
          </div>
        </div>
      </div>

      <h3>Question {id + 1}</h3>
      <h4>{questionsArray.question}</h4>
      {questionsArray.options.map((answer, index) => (
        <button
          className="btn btn-outline-primary"
          key={index}
          onClick={() => setAnswer(answer) }
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Questions;

{
  /* {id + 1}/{questions.length} */
}


