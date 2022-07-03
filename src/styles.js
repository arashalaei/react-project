import styled from "styled-components";

export const Box = styled.div`
    display: grid;
    grid-template-rows: 100px ;
    backface-visibility: hidden;
    width: clamp(400px, 70%, 800px);
    height: 65%;
    background-color: #fff;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 1rem 1rem 8px 0px rgba(#000 , 0.2);
    padding: 1.5rem;
`;