import { ILink } from '@/types/types'

export const headerLinks: Readonly<ILink[]> = [
  {
    url: '/',
    name: 'Головна',
  },
  {
    url: '/strategies',
    name: 'Стратегії',
  },
  {
    url: '/quiz',
    name: 'Вікторина',
  },
  {
    url: '/galerry',
    name: 'Галерея'
  }
] as const
