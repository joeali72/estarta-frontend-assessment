import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SSRProvider } from '@react-aria/ssr';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '@app/store';
// Import Styles Here =>
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SSRProvider>
        <QueryClientProvider client={client}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </QueryClientProvider>
      </SSRProvider>
    </>
  );
}
