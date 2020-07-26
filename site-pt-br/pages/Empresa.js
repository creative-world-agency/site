import Head from 'next/head'
//Reset Componente
import { Reset } from 'styled-reset'
//Componentes
import { Template } from '../Components/Template/Style' //Template


const Empresa = () => {
  return (
    <React.Fragment>
     <Reset />
      <TemplateGibs>
        <Head>
          <title>Creative World | About-Us</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="Coffee Soluções (André Rodrigues)" />
          <meta name="description" content="Conheça um pouco sobre a Creative World" />
          <meta name="keywords" content="UI, UX, Design, modelagem 3D, PhotoShop, Illustrator, Mockups" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Creative World - About-us" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          <meta property="article:author" content="https://xordevweb.com.br" />
        </Head>
        
      </TemplateGibs>
   </React.Fragment>
  );
}

export default Empresa;
