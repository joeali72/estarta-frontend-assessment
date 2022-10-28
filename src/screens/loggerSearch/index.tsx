import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useGetLoggerApi } from '@hooks/api/useGetLoggerApi';
const LoggerTable = dynamic(() => import('./components/table'));

export default function LoggerSearchScreen() {
  const { isLoading, isError, error, data: logger } = useGetLoggerApi();

  if (isLoading) {
    return <h3 className="text-center">Loading...</h3>;
  }
  if (isError && error) {
    return <h3 className="text-center">{error.message}</h3>;
  }

  return (
    <>
      <Head>
        <title>Estarta - Logger Search</title>
      </Head>

      <LoggerTable logger={logger} />
    </>
  );
}
