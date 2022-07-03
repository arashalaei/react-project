import { useEffect, useState } from "react";
import StarShipsInfo from "../starship-info";
import { Header, Wrapper, Pagination, Btn, Loading } from './styles';

const StarShips = ({ setPage, selectedMovie }) => {
    const [Starships, fetchStarships] = useState([]) 
    const [selectedStarShip, setSelectedStarShip] = useState(null)
    const [skip, setSkip] = useState(0)
    const [info, setInfo] = useState(false)

    useEffect(()=>{

        const getData = async() => {
            const starshipsFetche = [];
            selectedMovie.starships.forEach(api => starshipsFetche.push(fetch(api)));
            const resposnes = await Promise.all(starshipsFetche);
            const res =   await Promise.all(
                resposnes.map(
                    res => res.json()
                )
            );
            fetchStarships(res)
        }
        getData()

        
    }, [selectedMovie])

    useEffect(()=>{
        console.log(selectedStarShip);
    }, [selectedStarShip])

    let p = 0
    return(
        info?<StarShipsInfo setInfo={setInfo} selectedStarShip={selectedStarShip}/>:
        <>  
            <Header>{selectedMovie.title}</Header>
            {
                Starships.length?
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    {Starships.slice(skip * 5, (skip+1) * 5).map((starship, idx) => <Btn key={idx} id={p} onClick={()=> {
                        setSelectedStarShip(Starships[skip * 5 + idx])
                        setInfo(true)
                        }}>{starship.name}</Btn>)}
                    <Wrapper style={{ padding: '1rem 0 0 0 '}}>
                        <Btn onClick={()=>setPage('movies')}>Back</Btn>
                        <Pagination>
                            {
                                selectedMovie.starships.map((i, idx) => {
                                    if(idx % 5 === 0){
                                        p += 1
                                        return <Btn key={idx} id={p} onClick={(e)=>setSkip(e.target.id - 1)}>{p}</Btn>
                                    }
                            
                                })
                            }
                        </Pagination>
                        <div></div>
                    </Wrapper>
                </div>
                :
                <Loading>"...Loading..."</Loading>
            }
        </>
    )

}

export default StarShips