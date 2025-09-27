const fetching = async () =>{
    return await fetch('https://pokeapi.co/api/v2/pokemon?limit=30').then(res=>res.json()).then(data=>data.results.map(res=>res))
}

const main = async() =>{
    const data = await fetching()
    console.log(data)

    const table = document.getElementById('table')
    console.log(table);
    
    data.forEach(ele => {
        const card = document.createElement('div')
        card.setAttribute('class','w-full h-40 bg-gray-900 rounded-lg p-3 flex flex-col items-center justify-center')
        console.log(ele.name)
        card.innerText = ele.name
        table.appendChild(card)

    });
}

main()