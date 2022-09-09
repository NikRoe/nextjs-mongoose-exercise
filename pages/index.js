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
  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {questions.map(({ question, answer, options, id }) => {
          return (
            <QuestionCard
              key={id}
              answer={answer}
              question={question}
              options={options}
            />
          );
        })}
      </ul>
    </main>
  );
}
