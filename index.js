// Elements
const characterSelect = document.querySelector("#characters")

// function calls
getCharacter()

// EventListeners
characterSelect.addEventListener("change", getCharacter)

//disney collection functions

function getCharacter(e) {
    const character = e.target.value

    fetch(`https://api.disneyapi.dev/character=${character}`)
        .then(r => r.json())
        .then(recipes => renderAllCharacters(characters))
        .catch(error => alert(error))
}

