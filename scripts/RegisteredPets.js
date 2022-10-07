import { getPets, getWalkers } from "./database.js"
import { Walkers } from "./Walkers.js"

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
        
    }

    petHTML += "</ul>"

    return petHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")){

        const [,petId] = itemClicked.id.split("--")

        let matchingPet = null
        for (const pet of pets) {
            if (pet.id === parseInt(petId))
                matchingPet = pet
        }

        let matchingWalker = null
        for (const walker of walkers) {
            if (matchingPet.walkerId === walker.id)
                matchingWalker = walker
        }

        window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`)
    }
    }
)