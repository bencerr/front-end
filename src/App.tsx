import { NavLink } from "react-router";

function App() {
	return (
		<div>
			<div className="bg-slate-700 flex flex-col p-10">
				<h1 className="text-white">Hello</h1>
				<NavLink to="/">Main</NavLink>
				<NavLink to="cover-letter-create">Create</NavLink>
			</div>
		</div>
	);
}

export default App;
