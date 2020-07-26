import Head from 'next/head'
//Reset Componente
import { Reset } from 'styled-reset'
//Componentes
import { Template } from '../Components/Template/Style' //Template


const Home = () => {
  return (
    <React.Fragment>
     <Reset />
      <TemplateGibs>
        <Head>
          <title>Creative World</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Coffee Soluções (André Rodrigues)" />
          <meta name="description" content="Site sobre design UI/UX" />
          <meta name="keywords" content="UI, UX, Design, modelagem 3D, PhotoShop, Illustrator, Mockups" />
          <meta name="robots" content="index, follow" />
        </Head>
        
      </TemplateGibs>
   </React.Fragment>
  );
}

export default Home;
