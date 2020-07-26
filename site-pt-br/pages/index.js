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
          <meta name="author" content="" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Head>
        
      </TemplateGibs>
   </React.Fragment>
  );
}

export default Home;
