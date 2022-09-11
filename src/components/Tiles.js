import React, {useState} from "react";
import Tile from "./Tile"
import Filter from "./Filter"
import Sort from "./Sort"

// App
//     Tiles.js -> name, image
//         Tile.js -> name, image onclick: specialty, weight, greased, highest medal achieved
//     Filter.js
//     Sort.js

function Tiles( {hogs} ) {
    const [showDetails, setShowDetails] = useState(false)
    const [tileSelected, setTileSelected] = useState(" ")
    const [filterOn, setFilterOn] = useState(false)
    const [sortByName, setSortByName] = useState(false)
    const [sortByWeight, setSortByWeight] = useState(false)

    console.log(sortByName)
    console.log(sortByWeight)
    
    function handleTileClick(e) {
        setShowDetails(showDetails => !showDetails)
        setTileSelected(e.target.alt)
    }


    const newHogsArray = hogs.map((hog) => {
        if(hog.name === tileSelected) {
            if(showDetails === true) {
                return {...hog, details: true}
            } else {
                return {...hog, details: false}                
            }
        } else {
            return {...hog, details: false}
        }
    })

    const sortedHogs = newHogsArray.sort((a, b) => {
        if(sortByWeight === true) {
            return (a.weight > b.weight) ? 1 : -1
        } else if(sortByName === true) {
            return (a.name > b.name) ? 1 : -1
        } else {
            return (a, b)
        }
    })

    console.log(sortedHogs)

    const filteredHogs = sortedHogs.filter((hog) => {
        if(filterOn === true) {
           return hog.greased === true
       } else {
           return hog
       }
   })
  
    const ShowTiles = () => {
        return filteredHogs.map((hog) => (
            <Tile key={hog.name} hog={hog}  handleTileClick={handleTileClick} />
        ))
    }

	return (
        <div>
            <Filter filterOn={filterOn} setFilterOn={setFilterOn} />
            <Sort sortByName={sortByName} sortByWeight={sortByWeight} setSortByName={setSortByName} setSortByWeight={setSortByWeight} />
		    <div className="ui grid container">
			    <ShowTiles />
		    </div>
        </div>
	);
}

export default Tiles;