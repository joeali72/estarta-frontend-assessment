import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema } from '../schema/search.schema';
import { ISearchLogger } from '../components/search';

interface IFormData {
  employee_name: string;
  action_type: string;
  application_type: string;
  from_date: string;
  to_date: string;
  application_id: number;
}

export default function useSearch({ logger, setLogger }: ISearchLogger) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(searchSchema),
  });

  const onSubmit = handleSubmit((data: IFormData) => {
    console.log(data);
    const nl = logger?.filter(
      (item) =>
        item.actionType === data.action_type ||
        item.applicationId === +data.application_id ||
        item.applicationType === data.application_type ||
        item.creationTimestamp === data.from_date && item
    );
    setLogger(nl);
  });

  return { register, errors, onSubmit };
}
