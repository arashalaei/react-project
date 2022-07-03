import styled from "styled-components";

export const Header = styled.h1`
    display: inline-block;
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    background-image: linear-gradient(to right, red , #5643fa);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transition: all 0.2s;
    letter-spacing: .2rem;
    text-shadow: none;
    &:hover{
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(#000, .2);
    }
    padding: 1rem 0;
`;

export const MovieTitle = styled.h2`
    font-size: 1.7rem;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -6rem
`;

export const ReleaseDate = styled.div`
    font-size: 1.5rem;
`

export const Btn = styled.button`
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
    background-size: 300%;
    letter-spacing: .2rem;
    padding: 1rem;
    text-transform: uppercase;
    transition: all 0.5s;
    border-radius: 3px;
    border: none;
    
    &:hover{
        background-position: 100%;
        // color: $color-primary;
        box-shadow: 0 1rem 2rem rgba($color-black, .15);
        transform: translateY(-2px);
    }

    &:active{
        box-shadow: 0 .5rem 1rem rgba($color-black, .15);
        transform: translateY(0);
        color: #551A8B;
    }
    margin: 0 1rem;
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5.5rem
`;