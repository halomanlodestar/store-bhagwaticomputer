/** @format */

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import GlobalThemeProvider from "@/components/providers/GlobalThemeProvider";

const font = Quicksand({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Bhagwati Computer | Store",
	description: "Store by Bhagwati Computer for all your technical meeds",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<GlobalThemeProvider>
					<Navbar />
					{children}
				</GlobalThemeProvider>
			</body>
		</html>
	);
}
