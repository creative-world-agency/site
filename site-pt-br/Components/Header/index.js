import Link from 'next/head'
//Grid
//Componentes Banner
import {
  Banner,
  TitleBanner
} from './ContainersHeader/Style'
import {
  ContainerAmarelo,
  ContainerLinksSocial
} from './Social/Style'



const BannerHome = () => {
  return (
    <>
      <Banner>
        <ContainerAmarelo>
          <ContainerLinksSocial>
            
          </ContainerLinksSocial>
        </ContainerAmarelo>
      </Banner>
    </>
  );
}

export default BannerHome;
