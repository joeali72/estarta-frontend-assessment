import * as yup from 'yup';

export const searchSchema = yup
  .object({
    employee_name: yup.string(),
    action_type: yup.string(),
    application_type: yup.string(),
    from_date: yup.string(),
    to_date: yup.string(),
    application_id: yup.string(),
  })
  .required();
