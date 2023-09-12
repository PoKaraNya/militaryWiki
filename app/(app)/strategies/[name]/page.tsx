import { FC } from 'react'

interface IProps {
  params: {
    name: string
  }
}

const Page: FC<IProps> = ({ params }) => {
  return <div>{params.name}</div>
}
export default Page
