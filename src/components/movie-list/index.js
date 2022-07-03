// import { Movies } from './../../../public/static/mock';
import { useEffect, useState } from "react";
import { Header, MovieTitle, Wrapper, ReleaseDate, Btn, Loading } from './styles';
import "./../../App.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

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
                            <Link to={`/Movie/${movie.episode_id}/starships`}><Btn onClick={() => {
                                setselectedMovie(movie)
                                setPage('starships')
                                }} >Satarships</Btn></Link>
                            
                        </Wrapper>
                    )
                :
                <Loading>"...Loading..."</Loading>
            }
        </>
    )
}

MovieList.propTypes = {
    setPage: PropTypes.func, 
    selectedMovie: PropTypes.arrayOf(PropTypes.string)
}

export default MovieList;