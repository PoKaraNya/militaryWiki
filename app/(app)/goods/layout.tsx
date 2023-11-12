'use client'
import { FC, ReactNode } from 'react'
import Link from 'next/link'
import styled from "styled-components";
import {usePathname} from "next/navigation";

interface IProps {
  children: ReactNode
}

const GoodsLayout: FC<IProps> = ({ children }) => {
  const settingTabs = [
    {
      name: 'Одяг',
      value: '/goods/clothes',
    },
    {
      name: 'Інші товари',
      value: '/goods/other',
    },
  ]

  const Container = styled.div`
    padding: 10px;
    background: #0f1c15;
    margin-bottom: 10px;
  `

  interface LinkProps {
    active: boolean
  }

  const GoodsLink = styled(Link)<LinkProps>`
    background: ${(p) => p.active ? '#c5b06b' : '#21342f'};
    color: ${(p) => p.active ? '#21342f' : '#c5b06b'};
    text-decoration: none;
    padding: 10px;
  `

  const pathname = usePathname()

  return (
    <>
      <Container>
        {settingTabs.map(({ name, value }) => {
          return (
            <GoodsLink
                href={value}
                key={value}
                active={pathname.includes(value)}
            >
              {name}
            </GoodsLink>
          )
        })}
      </Container>
      {children}
    </>
  )
}
export default GoodsLayout
