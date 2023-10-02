export interface ILink {
  url: string
  name: string
}

export interface IStrategy {
  id: number
  title: string
  description: string
  image: string | null
}

export interface IQuiz {
  id: number
  question: string
  correctKey: string
  answers: QuizAnswer[]
}

export type QuizAnswer = {
  key: string
  text: string
}
