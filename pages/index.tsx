import Head from 'next/head'
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='min-h-100vh'>
      <Head>
        <title>Vefi NFT Marketplace</title>
        <meta name="description" content="vefi nft marketplace" />
        <link rel="icon" href="" />
      </Head>
      <span>Homepage goes here! Like seriously, it does</span>
    </div>
  );
};

export default Home;
