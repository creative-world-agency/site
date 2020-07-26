import estilo from 'styled-components'
//Breackpoints
import { Device } from '../../Breackpoints/Devices'
//Componentes
const Container = estilo.div`
	margin: 0 auto;
    width: 99%;
    @media ${Device.tablet} { 
    	width: 1080px;
  	}
`;
const Row = estilo.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:after {
	  content: "";
	  clear: both;
	  display: table;
	}
    @media ${Device.tablet} { 
    	flex-direction: row;
    	min-height: 8vh;
  	}
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Column = estilo.div`
	padding: .25rem;
    @media ${Device.tablet} { 
    	${({ Desk }) => Desk && getColumn(Desk)}
  	}
`;
export {
    Container,
    Column,
    Row
};