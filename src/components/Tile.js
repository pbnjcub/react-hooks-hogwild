import React from "react";

// App
//     Tiles.js -> name, image
//         Tile.js -> name, image onclick: specialty, weight, greased, highest medal achieved
//     Filter.js
//     Sort.js

function Tile({hog, handleTileClick}) {
    


    const ShowDetails = () => {
        if(hog.details === false) {
            return (
                <div className="content" onClick={handleTileClick}>
                    <div className="header">{hog.name}</div>
                    <img className="image" src={hog.image} alt={hog.name} />
		        </div>
            )
        } else {
            return (
                <div className="content" onClick={handleTileClick}>
                    <div className="header">{hog.name}</div>
                    <img className="image" src={hog.image} alt={hog.name} />
                    <div className="description">
                        Specialty: {hog.specialty}, Weight: {hog.weight}, Greased: {hog.greased}, Highest Medal Achieved: {hog["highest medal achieved"]}
                    </div>

                </div>
            )
        }
    }

	return (
        <div className="ui eight wide column">
            <ShowDetails />
        </div>
	)
}

export default Tile;