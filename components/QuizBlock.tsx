'use client'
import { FC, ReactNode } from 'react'
import { BaseContentBlock } from '@/components/BaseContentBlock'
import '@/styles/Quiz/quiz.scss'
import '@/styles/ContentBlocks/ContentBlock.scss'
import { QuizStatus } from '@/types/quiz'
import dynamic from 'next/dynamic'
import { Spin } from 'antd'
import {useAppSelector} from "@/store/hooks";

export const QuizBlock: FC = () => {
  const status = useAppSelector(state => state.quiz.status)

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
    start: <DynamicStart/>,
    progress: <DynamicQuestion/>,
    finish: <DynamicFinish/>,
  }

  return (
    <BaseContentBlock>
      <div className="quiz-block">{Content[status]}</div>
    </BaseContentBlock>
  )
}
