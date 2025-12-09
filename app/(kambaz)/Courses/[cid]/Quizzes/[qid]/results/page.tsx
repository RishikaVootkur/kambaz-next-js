/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import * as client from "../../client";

export default function QuizResults() {
  const params = useParams();
  const router = useRouter();
  const cid = params.cid as string;
  const qid = params.qid as string;
  
  const [quiz, setQuiz] = useState<any>(null);
  const [attempt, setAttempt] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizData = await client.findQuizById(qid);
        setQuiz(quizData);

        const latestAttempt = await client.getLatestAttempt(qid);
        setAttempt(latestAttempt);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };
    fetchData();
  }, [qid]);

  const isCorrect = (questionId: string) => {
    const answer = attempt?.answers?.find((a: any) => a.questionId === questionId);
    return answer?.isCorrect;
  };

  const getUserAnswer = (questionId: string) => {
    const answer = attempt?.answers?.find((a: any) => a.questionId === questionId);
    return answer?.answer;
  };

  const formatAnswer = (answer: any) => {
    if (answer === undefined || answer === null) {
      return "Not answered";
    }
    if (Array.isArray(answer)) {
      return answer.join(", ");
    }
    if (typeof answer === "object") {
      return Object.entries(answer)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
    }
    if (typeof answer === "boolean") {
      return answer ? "True" : "False";
    }
    return String(answer);
  };

  const getCorrectAnswer = (question: any) => {
    if (question.type === "MULTIPLE_CHOICE") {
      const correctChoice = question.choices.find((c: any) => c.isCorrect);
      return correctChoice?.text || "N/A";
    } else if (question.type === "TRUE_FALSE") {
      return question.correctAnswer ? "True" : "False";
    } else if (question.type === "FILL_BLANK") {
      return question.possibleAnswers.join(" or ");
    } else if (question.type === "MULTIPLE_CHOICE_MULTIPLE_ANSWERS") {
      const correctChoices = question.choices.filter((c: any) => c.isCorrect).map((c: any) => c.text);
      return correctChoices.join(", ");
    } else if (question.type === "FILL_MULTIPLE_BLANKS") {
      return question.blanks.map((blank: any) => 
        `${blank.blankId}: ${blank.possibleAnswers.join(" or ")}`
      ).join("; ");
    }
    return "N/A";
  };

  const formatDueDate = (dueDate: string) => {
    if (!dueDate) return "";
    const date = new Date(dueDate);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  if (!quiz || !attempt) return <div className="p-4">Loading...</div>;

  if (!attempt.submittedAt) {
    return (
      <div className="p-4">
        <Alert variant="warning">You have not completed this quiz yet.</Alert>
        <Button onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}>
          Back to Quiz
        </Button>
      </div>
    );
  }

  const totalPoints = quiz.questions?.reduce((sum: number, q: any) => sum + (q.points || 0), 0) || 0;
  const maxScore = totalPoints > 0 ? totalPoints : attempt.maxScore;
  const percentage = maxScore > 0 ? ((attempt.score / maxScore) * 100).toFixed(2) : "0.00";

  const isLastAttempt = !quiz.multipleAttempts || attempt.attemptNumber >= quiz.howManyAttempts;
  
  const shouldShowAnswers = () => {
    if (quiz.showCorrectAnswers === "IMMEDIATELY") {
      return true;
    }
    
    if (quiz.showCorrectAnswers === "NEVER") {
      return false;
    }
    
    if (quiz.showCorrectAnswers === "AFTER_LAST_ATTEMPT") {
      return isLastAttempt;
    }
    
    if (quiz.showCorrectAnswers === "AFTER_DUE_DATE") {
      if (!quiz.dueDate) return true;
      const now = new Date();
      const dueDate = new Date(quiz.dueDate);
      return now > dueDate;
    }
    
    return false;
  };
  
  const showDetailedAnswers = shouldShowAnswers();

  return (
    <div id="wd-quiz-results" className="p-4">
      <h2>{quiz.title} - Results</h2>
      
      <Alert variant="success" className="mt-4">
        <h4>Your Score: {attempt.score} / {maxScore}</h4>
        <p>Percentage: {percentage}%</p>
        <p className="mb-0">
          <small>
            Submitted: {new Date(attempt.submittedAt).toLocaleString()}
            <br />
            Attempt {attempt.attemptNumber} of {quiz.howManyAttempts || 1}
          </small>
        </p>
      </Alert>

      <h4 className="mt-4 mb-3">Your Answers:</h4>
      {quiz.questions?.map((question: any, index: number) => {
        const userAnswer = getUserAnswer(question._id);
        const correct = isCorrect(question._id);
        
        return (
          <div 
            key={question._id} 
            className={`card mb-3 ${correct ? 'border-success' : 'border-danger'}`}
          >
            <div className="card-body">
              <h5>
                Question {index + 1} ({question.points} pts)
                {correct ? " ✓" : " ✗"}
              </h5>
              <div dangerouslySetInnerHTML={{ __html: question.question }} className="mb-3" />
              
              <div className="mb-2">
                <strong>Your answer:</strong> {formatAnswer(userAnswer)}
              </div>
              
              {showDetailedAnswers && !correct && (
                <div className="mb-2">
                  <strong className="text-success">Correct answer:</strong>{" "}
                  <span className="text-success">{getCorrectAnswer(question)}</span>
                </div>
              )}
              
              {!correct ? (
                <div className="text-danger mb-0">
                  <strong>Status:</strong> Incorrect
                </div>
              ) : (
                <div className="text-success mb-0">
                  <strong>Status:</strong> Correct - {question.points} points earned
                </div>
              )}
            </div>
          </div>
        );
      })}

      {!showDetailedAnswers && (
        <Alert variant="info" className="mt-4">
          <h5>Correct Answers Hidden</h5>
          <div className="mb-0">
            {quiz.showCorrectAnswers === "NEVER" && (
              <p>Correct answers are not shown for this quiz.</p>
            )}
            {quiz.showCorrectAnswers === "AFTER_LAST_ATTEMPT" && !isLastAttempt && (
              <p>
                You have {quiz.howManyAttempts - attempt.attemptNumber} attempt(s) remaining. 
                Correct answers will be shown after you complete all attempts.
              </p>
            )}
            {quiz.showCorrectAnswers === "AFTER_DUE_DATE" && (
              <p>
                Correct answers will be shown after the quiz due date: {formatDueDate(quiz.dueDate)}
              </p>
            )}
          </div>
        </Alert>
      )}

      <div className="mt-4">
        <Button variant="primary" onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}>
          Back to Quiz Details
        </Button>
      </div>
    </div>
  );
}