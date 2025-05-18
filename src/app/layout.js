import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Receipt Gen",
	description: "Generated receipts",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="app">{children}</main>
				<Toaster position="bottom-center" />
			</body>
		</html>
	);
}
