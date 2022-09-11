import React from "react";

function Filter( {filterOn, setFilterOn} ) {
    
    
    function handleFilterClick() {
        setFilterOn((filterOn) => !filterOn)
    }

    return <button value={filterOn ? "Show all" : "Show Greased"} onClick={handleFilterClick}>{filterOn ? "Show all" : "Show Greased"} </button>
}


export default Filter

