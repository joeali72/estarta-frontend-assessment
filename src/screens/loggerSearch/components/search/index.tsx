import { ILogger } from '@allTypes/logger.types';
import useSearch from '@screens/loggerSearch/hooks/useSearch';
import { Dispatch, SetStateAction } from 'react';
import { Form } from 'react-bootstrap';

export interface ISearchLogger {
  logger: ILogger['result']['auditLog'] | undefined;
  setLogger: Dispatch<
    SetStateAction<
      | {
          logId: number;
          applicationId: any;
          applicationType: any;
          companyId: number | null;
          actionType: any;
          ip: string;
          userAgent: string;
          userId: number;
          source: string | null;
          ownerId: number | null;
          logInfo: string | null;
          creationTimestamp: any;
        }[]
      | undefined
    >
  >;
}

export default function SearchForm({ logger, setLogger }: ISearchLogger) {
  const { register, errors, onSubmit } = useSearch({ logger, setLogger });
  return (
    <Form className="d-flex align-items-end gap-4 mb-4" onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control {...register('employee_name')} />
        <Form.Control.Feedback
          type="invalid"
          className={errors?.employee_name ? 'd-block' : 'd-none'}
        >
          {errors?.employee_name?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Action Type</Form.Label>
        <Form.Select {...register('action_type')}>
          <option value=""></option>
          <option value="DARI_REFRESH_TOKEN">DARI_REFRESH_TOKEN</option>
          <option value="INITIATE_APPLICATION">INITIATE_APPLICATION</option>
          <option value="CERT_TITLE_DEED_PLOT">CERT_TITLE_DEED_PLOT</option>
        </Form.Select>
        <Form.Control.Feedback
          type="invalid"
          className={errors?.action_type ? 'd-block' : 'd-none'}
        >
          {errors?.action_type?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Application Type</Form.Label>
        <Form.Select {...register('application_type')}>
          <option value=""></option>
          <option value="LEASE_REGISTRATION">LEASE_REGISTRATION</option>
          <option value="ADD_POA">ADD_POA</option>
          <option value="ADD_COMPANY">ADD_COMPANY</option>
        </Form.Select>
        <Form.Control.Feedback
          type="invalid"
          className={errors?.application_type ? 'd-block' : 'd-none'}
        >
          {errors?.application_type?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>From Date</Form.Label>

        <Form.Control {...register('from_date')} />
        <Form.Control.Feedback
          type="invalid"
          className={errors?.from_date ? 'd-block' : 'd-none'}
        >
          {errors?.from_date?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>To Date</Form.Label>

        <Form.Control {...register('to_date')} />
        <Form.Control.Feedback
          type="invalid"
          className={errors?.to_date ? 'd-block' : 'd-none'}
        >
          {errors?.to_date?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Application ID</Form.Label>

        <Form.Control {...register('application_id')} />
        <Form.Control.Feedback
          type="invalid"
          className={errors?.application_id ? 'd-block' : 'd-none'}
        >
          {errors?.application_id?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <div className="submit">
        <button type="submit" className="btn btn-primary px-4">
          Search
        </button>
      </div>
    </Form>
  );
}
