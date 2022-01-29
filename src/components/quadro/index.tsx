import React, { useEffect, useState } from 'react'
import {Container, Image, Text} from './styled';
import axios from 'axios';

interface IDados{
    forms:[
        {
            name:string
        }
    ],
    sprites:{
        other:{
            dream_world:{
                front_default:string
            },
            'official-artwork':{
                front_default: string
            }
        }
    },
    types:[
        {
            type:{
               name:string,
               url:string
            }

        }
    ]
}

interface props{
    url:string,
    name?:string
}

export const Quadro = ({url,name}:props) =>{

    const [dados, setDados] =  useState<IDados>();

    useEffect(()=>{
        const carregarPokemon = async ()=>{
            const {data} = await axios.get(url);
            setDados(data);
        }
        carregarPokemon();
        console.log(dados?.types[0].type.name);
    },[])

    return (
        <Container typeColor={dados?.types[0].type.name}>
            <Image src={dados?.sprites.other['official-artwork'].front_default} alt={'Pokemon'}/>
            <Text>{dados?.forms[0].name}</Text>
        </Container>
    );
}