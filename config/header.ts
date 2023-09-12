interface ILink {
  url: string
  name: string
}

export const headerLinks: Readonly<ILink[]> = [
  {
    url: '/',
    name: 'Головна',
  },
  {
    url: '/strategies',
    name: 'Стратегії',
  },
] as const
