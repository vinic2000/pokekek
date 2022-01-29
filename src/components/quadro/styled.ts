import styled from 'styled-components';
import { type } from '../../types/PokemonColorTypes';

interface IContainerProps{
    typeColor?:string;
}
export const Container = styled.div<IContainerProps>`
    flex-direction: column;
    display: flex;
    width: 200px;
    border: 1px solid black;
    padding: 10px;
    background-color: ${props => props.typeColor ? type(props.typeColor.toUpperCase()): 'none'};
    margin-top: 10px;
    transition: padding 0.3s;
    align-items: center;

    &:hover{
        padding: 0px;
    }
`;

export const Image = styled.img`
    width: 80%;

`;

export const Text = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    width: 100%;
    text-align: center;
    font-size: 30px;
    text-transform: capitalize
`;