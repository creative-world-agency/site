import Link from 'next/head'
//Grid
//Componentes Banner
import {
  Banner,
  MediumContainer,
  TitleBanner
} from './ContainersHeader/Style'
import {
  ContainerAmarelo,
  ContainerLinksSocial
} from './Social/Style'
import { Container, Column, Row } from '../Grids/Style'



const BannerHome = () => {
  return (
    <>
      <Banner>
        <ContainerAmarelo>
          <ContainerLinksSocial>

          </ContainerLinksSocial>
        </ContainerAmarelo>
        <MediumContainer>
          <Container>
            <Row>
              <Column>

              </Column>
              <Column>
              
              </Column>
            </Row>
          </Container>
        </MediumContainer>
      </Banner>
    </>
  );
}

export default BannerHome;
