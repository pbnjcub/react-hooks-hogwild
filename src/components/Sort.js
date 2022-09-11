import React from "react"

function Sort( {sortByName, sortByWeight, setSortByName, setSortByWeight} ) {

    
    function handleSortByName() {

        setSortByName((sortByName) => !sortByName)
    }

    function handleSortByWeight() {

        setSortByWeight((sortByWeight) => !sortByWeight)
    }

    return (
        <div className="sort">
            <button value={sortByName ? "Unsort" : "Sort By Name"} onClick={handleSortByName}>{sortByName ? "Unsort" : "Sort By Name"} </button>
            <button value={sortByWeight ? "Unsort" : "Sort By Weight"} onClick={handleSortByWeight}>{sortByWeight ? "Unsort" : "Sort By Weight"} </button>
        </div>
    )
}

export default Sort