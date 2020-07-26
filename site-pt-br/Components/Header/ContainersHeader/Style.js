import estilo from 'styled-components'
//Breackpoint
import { Device } from '../../../Breackpoints/Devices'
//Componentes
const Banner = estilo.Section`
    display: flex;
    flex-direction: row;
    min-height: 80vh;
    width: 100%;
    @media ${Device.tablet} { 
    	flex-direction: row;
    	min-height: 100vh;
  	}
`;

export { Banner };