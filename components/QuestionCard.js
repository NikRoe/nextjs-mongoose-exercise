export default function QuestionCard({ question, answer, options }) {
  return (
    <li>
      <h2>{question}</h2>
      <ol>
        {options.map((option, index) => (
          <li key={index}>
            {index === answer ? "✅" : "❌"}
            &nbsp;
            {option}
          </li>
        ))}
      </ol>
    </li>
  );
}
