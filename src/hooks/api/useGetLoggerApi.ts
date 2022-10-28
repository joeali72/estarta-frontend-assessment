/**
 * @name use-Get-post-api
 * @author Yousef Ali
 * @summry This file will be used in most Get data from the server and will be used in this way that will be explored below.
 * @function useGetExApi this is the main function to be get data from the server, you just change the (Ex) to your API name.
 * @readonly Please don't make any changes to this file.
 */

import type { UseQueryResult } from 'react-query';
import { useQueryWrapper } from '@hooks/use-api-wrapper';
import api from '@services/api-service';
import type { AxiosError } from 'axios';
import { TLogger } from '@allTypes/logger.types';
import { useAppDispatch } from '@app/hooks';
import {
  fetchLoggerFailed,
  fetchLoggerStart,
  fetchLoggerSuccess,
} from '@app/logger/loggerSlice';

/**
 * @description will add the endpoint in link API into the constant below.
 */
const endpoint = 'a2fbc23e-069e-4ba5-954c-cd910986f40f';

/**
 * @description will add the data type into the interface below.
 */
// interface IData {}

/**
 * @description The return type is a type for Return or Response.
 */
type ReturnType = UseQueryResult<TLogger, AxiosError>;

export function useGetLoggerApi(): ReturnType {
  const dispatch = useAppDispatch();
  const queryFn = async () => {
    // dispatch(
    //   fetchLoggerStart({
    //     isLoading: true,
    //     isError: true,
    //     error: null,
    //     data: undefined,
    //   })
    // );
    const { data } = await api.get(endpoint);
    // if (data.success) {
    //   dispatch(
    //     fetchLoggerSuccess({
    //       isLoading: false,
    //       isError: false,
    //       error: null,
    //       data: data,
    //     })
    //   );
    // }

    return data;
  };

  return useQueryWrapper(endpoint, queryFn);
}
