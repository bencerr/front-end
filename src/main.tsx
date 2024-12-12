import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import CoverLetterCreation from "./cover-letter-creater/page.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<App />} />
					<Route path="cover-letter-create" element={<CoverLetterCreation />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
