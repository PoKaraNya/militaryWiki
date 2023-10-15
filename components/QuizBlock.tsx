'use client'
import { FC, ReactNode, useMemo, useState } from 'react'
import { IQuiz } from '@/types/types'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import '@/styles/Quiz/quiz.scss'
import '@/styles/ContentBlocks/ContentBlock.scss'
import { QuizStatus } from '@/types/quiz'
import { useCounter } from '@/hooks/useCounter'
import dynamic from 'next/dynamic'
import { Spin } from 'antd'

interface IProps {
  quizList: IQuiz[]
  questionNumber: number
}

export const QuizBlock: FC<IProps> = ({ quizList, questionNumber }) => {
  const [status, setStatus] = useState<QuizStatus>('start')
  const [step, addStep, resetStep] = useCounter(0)
  const [success, addSuccess, resetSuccess] = useCounter(0)
  const [fail, addFail, resetFail] = useCounter(0)

  const quizQuestionList = quizList
    .sort(() => Math.random() - 0.5)
    .slice(0, questionNumber)
  const memoQuizQuestionList = useMemo(() => quizQuestionList, [])

  console.log(memoQuizQuestionList)

  const startHandle = (): void => {
    setStatus('progress')
    resetStep()
    resetSuccess()
    resetFail()
  }

  const answerHandle = (success: boolean): void => {
    if (success) {
      addSuccess()
    } else {
      addFail()
    }
    if (step >= questionNumber - 1) {
      setStatus('finish')
    } else {
      addStep()
    }
  }

  const DynamicStart = dynamic(() => import('./QuizBlockStart'), {
    ssr: true,
    loading: () => <Spin size="large" />,
  })
  const DynamicQuestion = dynamic(() => import('./QuizBlockQuestion'), {
    ssr: true,
    loading: () => <Spin size="large" />,
  })
  const DynamicFinish = dynamic(() => import('./QuizBlockFinish'), {
    ssr: true,
    loading: () => <Spin size="large" />,
  })

  const Content: Record<QuizStatus, ReactNode> = {
    start: <DynamicStart startHandler={startHandle} />,
    progress: (
      <DynamicQuestion
        quizList={memoQuizQuestionList}
        index={step}
        answerHandle={answerHandle}
      />
    ),
    finish: (
      <DynamicFinish
        failNum={fail}
        successNum={success}
        returnHandle={startHandle}
      />
    ),
  }

  return (
    <BaseContentBlock>
      <div className="quiz-block">{Content[status]}</div>
    </BaseContentBlock>
  )
}
