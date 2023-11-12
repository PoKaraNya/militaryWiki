export const required = {
  required: 'Це поле обовʼязкове',
}

export const baseValidation = {
  minLength: {
    value: 3,
    message: 'Має бути більше 3 символів',
  },
  maxLength: {
    value: 20,
    message: 'Має бути менше 20 символів',
  },
  ...required,
}

export const phone = {
  pattern: {
    value: /^\+[1-9][0-9]{3,14}$/g,
    message: 'Введіть корректний номер',
  },
  ...required,
}

export const mail = {
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: 'Введіть корректну пошту',
  },
}

export const positiveNum = {
  min: {
    value: 0,
    message: 'Число має бути позитивним',
  },
  max: {
    value: 999999,
    message: 'Занадто велике число',
  },
}
