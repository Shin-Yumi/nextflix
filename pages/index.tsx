import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';

const Home: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center py-2'>
			<Head>
				<title>Nextflix</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className=''></main>
		</div>
	);
};

export default Home;
