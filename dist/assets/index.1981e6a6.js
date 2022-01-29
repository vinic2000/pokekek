import{W as x,s as l,j as p,r as c,a as u,R as g,b as y}from"./vendor.7572858a.js";const h=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(o){if(o.ep)return;o.ep=!0;const e=t(o);fetch(o.href,e)}};h();const C=x`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
`,F={FIRE:"#F67F0B",FIGHTING:"#800B11",GROUND:"#CC9966",ELECTRIC:"#FFFF99",GRASS:"#55a630",BUG:"#aacc00",ICE:"#BBE3ED",WATER:"#80C0E0",POISON:"#7209b7",PSYCHIC:"#F55792",NORMAL:"#fefae0",STEEL:"#6c757d",ROCK:"#7f5539",DARK:"#BBBBBB",FAIRY:"#FFE0FF",DRAGON:"#29036A",GHOST:"#472B53"},S=r=>F[`${r}`],E=l.div`
    flex-direction: column;
    display: flex;
    width: 200px;
    border: 1px solid black;
    padding: 10px;
    background-color: ${r=>r.typeColor?S(r.typeColor.toUpperCase()):"none"};
    margin-top: 10px;
    transition: padding 0.3s;
    align-items: center;

    &:hover{
        padding: 0px;
    }
`,R=l.img`
    width: 80%;

`,b=l.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    width: 100%;
    text-align: center;
    font-size: 30px;
    text-transform: capitalize
`,n=p.exports.jsx,f=p.exports.jsxs,w=p.exports.Fragment,m=({url:r,name:a})=>{const[t,i]=c.exports.useState();return c.exports.useEffect(()=>{(async()=>{const{data:e}=await u.get(r);i(e)})(),console.log(t==null?void 0:t.types[0].type.name)},[]),f(E,{typeColor:t==null?void 0:t.types[0].type.name,children:[n(R,{src:t==null?void 0:t.sprites.other["official-artwork"].front_default,alt:"Pokemon"}),n(b,{children:t==null?void 0:t.forms[0].name})]})},B=l.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    flex-direction: row;
    margin: 0 auto;

    max-width: 1000px;
    margin-top: 20px;
`,O=l.input`
    width: 100%;
    font-size: 20px;
    padding: 10px;
    font-family:'Source Sans Pro', sans-serif;
`,I=()=>{const[r,a]=c.exports.useState(),[t,i]=c.exports.useState("");c.exports.useEffect(()=>{(async()=>{const{data:s}=await u.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");a(s)})(),console.log(r==null?void 0:r.results[0].name)},[]);const o=c.exports.useCallback(e=>{i(e)},[]);return f(B,{children:[n(O,{type:"text",onChange:({target:e})=>{o(e.value)},value:t}),t.length?r==null?void 0:r.results.filter(e=>e.name.includes(t)).map(e=>n(m,{url:e.url},e.name)):r==null?void 0:r.results.map(({name:e,url:s},d)=>n(m,{url:s},d))]})},k=()=>f(w,{children:[n(C,{}),n(I,{})]});g.render(n(y.StrictMode,{children:n(k,{})}),document.getElementById("root"));
