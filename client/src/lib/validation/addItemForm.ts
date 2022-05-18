import { z } from 'zod';

export const AddItemFormValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  parValue: z
    .number({
      invalid_type_error: 'Expecting a number',
      required_error: 'Par value is required',
    })
    .nonnegative({ message: 'Par value must be a non-negative value' }),
  price: z
    .number({
      invalid_type_error: 'Expecting a number',
      required_error: 'Starting price is required',
    })
    .nonnegative({ message: 'Starting price must be a non-negative value' }),
  quantity: z
    .number({
      invalid_type_error: 'Expecting a number',
      required_error: 'Quantity is required',
    })
    .nonnegative({ message: 'Quantity must be a non-negative value' }),
});
