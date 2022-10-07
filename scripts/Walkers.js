import { getWalkers } from "./database.js"
import { getwalkerCities } from "./database.js"
import { getCities } from "./database.js"
const walkers = getWalkers()
const listOfCities = getwalkerCities()
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}



document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("walker")) {

            const [,walkerId] = itemClicked.id.split("--")


            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const matchedCities = matchedWalkerCities(walker)
                    const stringCities = assignedCityNames(matchedCities)
                    window.alert(`${walker.name} services ${stringCities}`)

                    
                }
            }
        }
    }
)
//takes in walkers objs
const matchedWalkerCities = (walker) => {
    //needs a new array to push filtered walkers
    const matched = []
        //loop through city
        for (const city of listOfCities) {
            //if foreign key = primary key push into new array
        if (city.walkerId === walker.id)
            matched.push(city)
        }
        return matched
    }

const assignedCityNames = (matched) => {
    let stringCities = ``
        for (const match of matched){
            for (const city of cities)
            if (city.id === match.cityId)
        stringCities += `${city.name}, `
    }
    return stringCities
}