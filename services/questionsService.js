import dbConnect from "../dbConnect";
import Question from "../models/Question";

export async function getAllQuestions() {
  await dbConnect();

  const questions = await Question.find();

  console.log(questions, "questions");

  const questionsArray = questions.map(({ id, question, answer, options }) => {
    return { id, question, answer, options };
  });

  return questionsArray;
}
