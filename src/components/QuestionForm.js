import React, { useState } from "react";

function QuestionForm(props) {
  const [quiz, setquiz] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    pass: 0,
  });

  
  
  
  function handleChange(e) {
    setquiz({
      ...quiz,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: quiz.prompt,
        answers: [
          quiz.answer1,
          quiz.answer2,
          quiz.answer3,
          quiz.answer4,
        ],
        pass: parseInt(quiz.pass),
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        
      })
      .catch((error) => {
        // Handle errors
        
      });
  }

  return (
    <section>
      <h1>Add New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={quiz.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={quiz.answer1}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={quiz.answer2}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={quiz.answer3}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={quiz.answer4}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <select
            name="pass"
            value={quiz.pass}
            onChange={handleChange}
          >
            <option value="0">{quiz.answer1}</option>
            <option value="1">{quiz.answer2}</option>
            <option value="2">{quiz.answer3}</option>
            <option value="3">{quiz.answer4}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
