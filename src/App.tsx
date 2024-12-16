import { useMutation } from "@tanstack/react-query";
// import { NavLink } from "react-router";

function createCoverLetter({ message = "" }) {
	return fetch("http://127.0.0.1:8000", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(message),
	});
}

function App() {
	const mutate = useMutation({
		mutationFn: createCoverLetter,
		onSuccess: (data) => {
			data.blob().then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = "test.pdf";
				document.body.appendChild(a);
				a.click();
				a.remove();
				return;
			});
		},
	});

	return (
		<div className="card bg-base-100 w-96 shadow-xl">
			<textarea className="textarea" placeholder="Hello"></textarea>
			<button
				className="w-1/2 self-center btn"
				onClick={() => {
					mutate.mutate({ message: "test" });
				}}
			>
				post
			</button>
		</div>
	);
}

export default App;
