/**
 * Don't forget to add the function
 * `getServerSideProps`!
 */

import QuestionCard from "../components/QuestionCard";
import { getAllQuestions } from "../services/questionsService";

export async function getServerSideProps() {
  const questions = await getAllQuestions();

  return {
    props: {
      questions: questions,
    },
  };
}

export default function IndexPage({ questions }) {
  console.log(questions);
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {questions.map((question) => {
          return (
            <QuestionCard
              key={question.id}
              answer={question.answer}
              question={question.question}
              options={question.options}
            />
          );
        })}
      </ul>
    </main>
  );
}
