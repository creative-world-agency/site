import Head from 'next/head'
//Reset Componente
import { Reset } from 'styled-reset'
//Componentes
import { Template } from '../Components/Template/Style' 
import BannerHome from '../Components/Header'

const Home = () => {
  return (
    <React.Fragment>
     <Reset />
      <Template>
        <Head>
          <title>Creative World</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Coffee Soluções (André Rodrigues)" />
          <meta name="description" content="Site sobre design UI/UX" />
          <meta name="keywords" content="UI, UX, Design, modelagem 3D, PhotoShop, Illustrator, Mockups" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Creative World" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          <meta property="article:author" content="https://xordevweb.com.br" />
        </Head>
        <BannerHome />
      </Template>
   </React.Fragment>
  );
}

export default Home;
