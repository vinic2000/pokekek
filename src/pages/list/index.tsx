import axios from 'axios';
import { useCallback, useEffect, useState } from 'react'
import { Quadro } from '../../components/quadro';
import {Container, Find} from './styled'
interface IPokemon{
  results:[
    {    
      name:string,
      url:string
    }
  ]
}

export const List = () => {

  const [dados, setDados] = useState<IPokemon>(); 
  const [seach, setSeach] = useState<string>('');

  useEffect(()=>{
    const carregar = async ()=>{
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0');
      setDados(data);
    }

    carregar();
    console.log(dados?.results[0].name);
  },[])

  const filter = useCallback((pokemon:string) =>{
    setSeach(pokemon);
  },[])

  return (
    <Container>
      <Find type='text' onChange={({target})=>{filter(target.value)}} value={seach}/>
      {
        seach.length 
        ? 
          dados?.results.filter(poke => poke.name.includes(seach)).map((item)=>(<Quadro key={item.name} url={item.url}/>))
        : 
          dados?.results.map(({name, url}, index) =><Quadro key={index} url={url}/>)
      }
    </Container>
  );
}
