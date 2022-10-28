/**
 * @name use-api-wrapper
 * @author Moaaz Ahmed
 * @summary This file will be containing all the handle methods for fetching data using all request methods.
 * @description As you can see in the file we are using react-query for fetching data.
 * @access private
 *
 * @function useQueryWrapper This is the main function to be re-used outside the file to call or fetch some data.
 * @function useMutationWrapper This is the main function to be re-used outside the file to call or fetch some data.
 * @readonly Please don't make any changes to this file.
 */

import {
  MutationFunction,
  QueryFunction,
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

/**
 * @description All API calls should be wrapped by this hook.
 * This will be returning the same object that a normal useQuery hook usage has.
 * We just added a layer to give rooms for uniform calls.
 */

/**
 * Use this on getting data related actions.
 * A query can be used with any Promise based method (including GET and POST methods)
 * to fetch data from a server. If your method modifies data on the server,
 * we recommend using Mutations instead.
 * https://react-query.tanstack.com/guides/queries
 *
 */

export function useQueryWrapper<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  identifier: TQueryKey,
  apiFn: QueryFunction<TQueryFnData, TQueryKey>,
  options: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  > = {}
): UseQueryResult<TData, TError> {
  return useQuery<TQueryFnData, TError, TData, TQueryKey>(
    identifier,
    apiFn,
    options
  );
}

/**
 * Unlike queries, mutations are typically used to create/update/delete data or perform server side effects.
 * https://react-query.tanstack.com/guides/mutations
 *
 */

export function useMutationWrapper<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: MutationFunction<TData, TVariables>,
  options: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationFn'
  > = {}
): UseMutationResult<TData, TError, TVariables, TContext> {
  return useMutation<TData, TError, TVariables, TContext>(mutationFn, options);
}
