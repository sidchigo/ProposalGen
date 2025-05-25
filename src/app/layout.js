import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Proposal Gen",
	description: "Generated proposals for your clients",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="app bg-beige">{children}</main>
				<Toaster position="bottom-center" />
			</body>
		</html>
	);
}
