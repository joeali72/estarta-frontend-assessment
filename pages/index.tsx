import dynamic from 'next/dynamic';

const LoggerSearchScreen = dynamic(() => import('@screens/loggerSearch'));

export default function Home() {
  return <LoggerSearchScreen />;
}
