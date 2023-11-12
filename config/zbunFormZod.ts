import { z } from 'zod'

export const validationSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  loading_country: z.string(),
  loading_city: z.string(),
  loading_index: z.string(),
  unloading_country: z.string(),
  unloading_city: z.string(),
  unloading_index: z.string(),
})
