import { Header, Container, Wrapper, Btn } from "./styles";

const StarShipsInfo = ({ setInfo, selectedStarShip }) => {

    return(
    <>
        <Header>{selectedStarShip.name}</Header>
        <Container>
            <div style={{fontSize:'2rem'}}>Crew:{selectedStarShip.crew}</div>
            <div style={{fontSize:'2rem'}}>Manufacturer:{selectedStarShip.manufacturer}</div>
            <div style={{fontSize:'2rem'}}>passengers:{selectedStarShip.passengers}</div>
            <div style={{fontSize:'2rem'}}>model:{selectedStarShip.model}</div>
            <Wrapper>
                <Btn onClick={() => setInfo(false)}>Back</Btn>
                <div></div>
                <div></div>
            </Wrapper>
        </Container>
    </>)
}

export default StarShipsInfo