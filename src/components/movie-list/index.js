import { useEffect, useState } from "react";
import { Header, MovieTitle, Wrapper, ReleaseDate, Btn, Loading } from './styles';
import "./../../App.css";

const MovieList = ({setPage, setselectedMovie}) => {
    const [Movies, fetchMovies] = useState([]) 

    useEffect(()=>{
        const getData = async() => {
            const moviesFetche = [];
            [4, 5, 6, 1, 2, 3].forEach(order => moviesFetche.push(fetch(`https://swapi.dev/api/films/${order}`)));
            const resposnes = await Promise.all(moviesFetche);
            const res =   await Promise.all(
                resposnes.map(
                    res => res.json()
                )
            );
            fetchMovies(res)
            // [4, 5, 6, 1, 2, 3].forEach(
            //     order => {
            //         fetch(`https://swapi.dev/api/films/${order}`)
            //             .then((res) => res.json())
            //             .then((res) => {
            //                 fetchMovies(oldArray => [...oldArray, res]);
            //             })
            //     }
            // )

        }
        getData()
    }, [])

    return(
        <>
            <Header>Movies</Header>
            {
                Movies.length?
                    Movies.map(
                        (movie, idx) => <Wrapper key={idx}>
                            <MovieTitle>{movie.title}{`(${movie.episode_id})`}</MovieTitle>
                            <ReleaseDate>{movie.release_date}</ReleaseDate>
                            <Btn onClick={() => {
                                setselectedMovie(movie)
                                setPage('starships')
                                }} >Satarships</Btn>
                        </Wrapper>
                    )
                :
                <Loading>"...Loading..."</Loading>
            }
        </>
    )
}

export default MovieList;