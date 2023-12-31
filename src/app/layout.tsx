/** @format */

import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import GlobalThemeProvider from "@/components/providers/GlobalThemeProvider";
import Footer from "@/components/Footer";

const font = Quicksand({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Bhagwati Computer | Store",
	description: "Store by Bhagwati Computer for all your technical meeds",
	openGraph: {
		title: "Bhagwati Computer | Store",
		description: "Store by Bhagwati Computer for all your technical meeds",
		images: [{ url: "https://store.bhagwaticomputer.com/logo.png" }],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className={font.className}>
				<GlobalThemeProvider>
					<Navbar />
					{children}
					<Footer />
				</GlobalThemeProvider>
			</body>
		</html>
	);
}
