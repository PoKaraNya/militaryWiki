'use client'
import {FC} from 'react'
import {BaseContentBlock} from '@/components/BaseContentBlock'
import {TransparentBlock} from "@/components/TransparentBlock";

interface IProps {
}

const Home: FC<IProps> = () => {
  return (
    <main>
      <TransparentBlock/>
      <BaseContentBlock transparent>asdf</BaseContentBlock>
      <BaseContentBlock>asdf</BaseContentBlock>
      <BaseContentBlock transparent>asdf</BaseContentBlock>
      <BaseContentBlock>asdf</BaseContentBlock>

      app page
    </main>
  )
}
export default Home
