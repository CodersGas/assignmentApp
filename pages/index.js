import Head from 'next/head';
import AppHeader from '../components/AppHeader';
import MainContentHead from '../components/mainContentHead';
import MainContent from '../components/mainComponent';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='content'>
       <Head>
            <title>My App</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" 
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <AppHeader/>
        <MainContentHead />
        <MainContent />
        <Footer />

      <style jsx>{`

        html, body {
          overflow: hidden;
        }
        .content {
          background-color: #d9d9d9;
        }
      `}</style>
    </div>
  )
}


// the issue was setting up theme provider is a must for material ui to work.
// so how should i do that
// you can now use this code base to continue, remove the other
// okay sir, thankyou
// thank you