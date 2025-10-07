const fetchallpokemon = async () =>{
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=300').then(res=>res.json()).then(data=>data.results.map(res=>res))
}

const fetcheachpokemon = async (url) =>{
    return await fetch(url).then(res=>res.json())
    
}

const pokemonElementTextColors = {
  normal: 'text-gray-400',
  fire: 'text-red-500',
  water: 'text-blue-500',
  electric: 'text-yellow-400',
  grass: 'text-green-500',
  ice: 'text-blue-200',
  fighting: 'text-red-700',
  poison: 'text-purple-600',
  ground: 'text-yellow-700',
  flying: 'text-indigo-300',
  psychic: 'text-pink-500',
  bug: 'text-green-700',
  rock: 'text-yellow-800',
  ghost: 'text-indigo-700',
  dragon: 'text-purple-800',
  dark: 'text-gray-800',
  steel: 'text-gray-500',
  fairy: 'text-pink-300'
};


const main = async() =>{
    const data = await fetchallpokemon()
    const table = document.getElementById('table')
    const allpokemon = await Promise.all(
        data.map(({url})=> fetcheachpokemon(url))
    )

    allpokemon.forEach(({id,types,sprites:{front_default},name}) => {
        const card = document.createElement('div')
        card.setAttribute('class','w-full h-47 bg-gray-900 rounded-lg p-3 flex flex-col items-center justify-center')
        const pokeid = document.createElement('p')
        pokeid.innerText = id
        const img = document.createElement('img')
        img.setAttribute('src',front_default)
        const pokename = document.createElement('h1')
        pokename.setAttribute('class','text-xl')
        pokename.innerText = name
        const poketypes = document.createElement('div')
        poketypes.setAttribute('class','flex flex-row gap-3 text-xs')
        types.forEach(({type:{name}})=>{
            const poketype = document.createElement('p')
            poketype.innerText = name
            poketype.setAttribute('class',pokemonElementTextColors[name])
            poketypes.appendChild(poketype)
        })
        card.appendChild(pokeid);
        card.appendChild(img);
        card.appendChild(pokename);
        card.appendChild(poketypes);
        table.appendChild(card)
    });
    // data.forEach(ele => {
    //     const card = document.createElement('div')
    //     card.setAttribute('class','w-full h-40 bg-gray-900 rounded-lg p-3 flex flex-col items-center justify-center')
    //     console.log(ele.name)
    //     card.innerText = ele.name
    //     table.appendChild(card)

    // });
}

main()