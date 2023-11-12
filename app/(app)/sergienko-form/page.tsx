'use client'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import '@/styles/SergienkoForm/sergienko-form.scss'
import { object, string } from 'yup'

const Page: FC = () => {
  const { register, handleSubmit } = useForm()

  const types = [
    {
      name: 'Посилка',
      value: '1',
    },
    {
      name: 'Документи',
      value: '2',
    },
    {
      name: 'Лист',
      value: '3',
    },
  ] as const

  const [currentType, setCurrentType] = useState<string>('1')

  const ParcelSubform = () => (
    <>
      <input type="number" {...register('weight')} placeholder="Вага" />
      <input
        type="number"
        {...register('maxSide')}
        placeholder="Максимальна сторона"
      />
      <input
        type="number"
        {...register('price')}
        placeholder="Оголошена вартість"
      />
    </>
  )

  const DocumentsSubform = () => (
    <>
      <label htmlFor="return">Вага</label>
      <input type="checkbox" id="return" {...register('return')} />
      <label htmlFor="onAddress">На адресу</label>
      <input type="checkbox" id="onAddress" {...register('onAddress')} />
    </>
  )

  const LetterSubform = () => (
    <>
      <label htmlFor="weight">Вага</label>
      <input id="weight" type="number" {...register('weight')} />
    </>
  )

  const validationSchema = object({
    from: string().min(5).max(20).required(),
    to: string().min(5).max(20).required(),
  })

  const confirmHandle = async (data: any) => {
    console.log(data)
    try {
      await validationSchema.validate(data)
      alert('Успіх')
    } catch (e) {
      console.log(e)
      alert('Не всі поля заповнені')
    }
  }

  return (
    <form onSubmit={handleSubmit(confirmHandle)} className="sergienko-form">
      <h2>1. Маршрут</h2>

      <div className="row">
        <div>
          <p>Звідки</p>
          <input
            type="text"
            {...register('from', {
              required: true,
            })}
            placeholder="Введіть назву населеного пункту"
          />
        </div>

        <div>
          <p>Куди</p>
          <input
            type="text"
            {...register('to', {
              required: true,
            })}
            placeholder="Введіть назву населеного пункту"
          />
        </div>
      </div>

      <h2>Тип відправлення</h2>

      <div className="row">
        {types.map(({ name, value }, index) => {
          return (
            <div
              className={`type-button ${
                value === currentType ? 'type-button--active' : ''
              }`}
              key={index}
              onClick={() => setCurrentType(value)}
            >
              {name}
            </div>
          )
        })}
      </div>
      <div className="row">
        {currentType === '1' && <ParcelSubform />}
        {currentType === '2' && <DocumentsSubform />}
        {currentType === '3' && <LetterSubform />}
      </div>
      <div>
        <button type="submit">Підтвердити</button>
      </div>
    </form>
  )
}
export default Page
