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
    name: 'Галерея',
  },
  {
    url: '/cat-galerry',
    name: 'Коти',
  },
  {
    url: '/forms/zbun',
    name: 'Форма Збунь',
  },
  {
    url: '/sergienko-form',
    name: 'Форма Сергієнко',
  },
  {
    url: '/goods/clothes',
    name: 'Товари',
  },
] as const
