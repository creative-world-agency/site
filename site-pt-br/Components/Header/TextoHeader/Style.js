import estilo from 'styled-components'
//Breackpoint
import { Device } from '../../../Breackpoints/Devices'
//Componentes
const TituloBanner = estilo.h2`
    font-size: 3rem;
    @media ${Device.tablet} { 
    	font-size: 5.625rem;
  	}
`;

export { TitleBanner };