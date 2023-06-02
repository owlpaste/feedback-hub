import Head from 'next/head';
import React from 'react';

const Header = () => {
   return (
      <Head>
         <title>Feedback Hub</title>
         <meta
            name='description'
            content='Generates student feedback reports with preset sentences. Aimed at pre-school age.'
         />
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <link rel='icon' href='/favicon.ico' />
      </Head>
   );
};

export default Header;
