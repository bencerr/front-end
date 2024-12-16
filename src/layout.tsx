import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

export default function Layout() {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<h1>HEADER</h1>
				<Outlet />
			</QueryClientProvider>
		</div>
	);
}
