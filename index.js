// Elements
const characterSelect = document.querySelector("#characters")

// function calls
getCharacter()

// EventListeners
//disney collection functions

function getCharacter(e) (
    const character = e.target.value

    fetch(`https://api.disneyapi.dev/character=${character}`)
        .then(r => r.json())
        .then(recipes => renderAllCharacters(characters)

)

