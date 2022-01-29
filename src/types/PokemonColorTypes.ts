interface IPokeProps{
    [name: string]:string
}

const pokemonColorTypes = <IPokeProps>{
    'FIRE':'#F67F0B',
    'FIGHTING':'#800B11',
    'GROUND':'#CC9966',
    'ELECTRIC':'#FFFF99',
    'GRASS':'#55a630',
    'BUG':'#aacc00',
    'ICE':'#BBE3ED',
    'WATER':'#80C0E0',
    'POISON':'#7209b7',
    'PSYCHIC':'#F55792',
    'NORMAL':'#fefae0',
    'STEEL':'#6c757d',
    'ROCK':'#7f5539',
    'DARK':'#BBBBBB',
    'FAIRY':'#FFE0FF',
    'DRAGON':'#29036A',
    'GHOST':'#472B53'
};


export const type = (type:string) =>{
    return pokemonColorTypes[`${type}`];
}
