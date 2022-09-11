import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tiles from "./Tiles"

// App
//     Tiles.js -> name, image
//         Tile.js -> name, image onclick: specialty, weight, greased, highest medal achieved
//     Filter.js
//     Sort.js

function App() {
	return (
		<div className="App">
			<Nav />
			<Tiles hogs={hogs} />
		</div>
	);
}

export default App;
