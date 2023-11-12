import { FC } from 'react'
import BaseCard from '@/components/BaseCard'
import BaseCardContainer from '@/components/BaseCardContainer'

interface IProps {}

const ClothesPage: FC<IProps> = () => {
  return (
    <div>
      <BaseCardContainer>
        {new Array(20).fill(null).map(() => {
          return (
            <BaseCard
              img={
                'https://killa.com.ua/image/cache/catalog/image/cache/catalog/import_yml2/m-tac-kurtka-norman-windblock-fleece-oliva/20027001-800x800.webp'
              }
              title={'Title'}
              description={'Description'}
              price={100}
            />
          )
        })}
      </BaseCardContainer>
    </div>
  )
}
export default ClothesPage
