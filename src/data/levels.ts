export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Level {
  id: number;
  difficulty: Difficulty;
  question: string;
  codeTemplate: string;
  correctAnswer: string;
}

export const levels: Level[] = [
  {
    id: 1,
    difficulty: "Easy",
    question: "Fill in the blank to print 'Hello World' in Python:",
    codeTemplate: "print(___)",
    correctAnswer: "Hello World",
  },
  {
    id: 2,
    difficulty: "Medium",
    question: "Fix the function so it returns the sum of two numbers:",
    codeTemplate: "function add(a, b) { return a - b; // fix me }",
    correctAnswer: "return a + b;",
  },
  {
    id: 3,
    difficulty: "Hard",
    question: "Fix the function so it returns the sum of two numbers:",
    codeTemplate: "function add(a, b) { return a - b; // fix me }",
    correctAnswer: "return a + b;",
  },

];
