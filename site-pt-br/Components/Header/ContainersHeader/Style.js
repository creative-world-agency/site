import estilo from 'styled-components'
//Breackpoint
import { Device } from '../../../Breackpoints/Devices'
//Componentes
const Banner = estilo.section`
    display: flex;
    flex-direction: row;
    min-height: 80vh;
    width: 100%;
    @media ${Device.tablet} { 
    	flex-direction: row;
    	min-height: 100vh;
  	}
`;
const MediumContainer = estilo.div`
    display: flex;
    flex-direction: row;
    min-height: 80vh;
    width: 80%;
    @media ${Device.tablet} { 
        min-height: 100vh;
        width: 70%;
    }
`;

export { Banner, MediumContainer };