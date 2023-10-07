/** @format */
"use client";

import { FunctionComponent, useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";

interface GlobalThemeProviderProps {
	children: React.ReactNode;
}

const GlobalThemeProvider: FunctionComponent<GlobalThemeProviderProps> = ({
	children,
}) => {
	const { theme, setTheme } = useTheme();
	useEffect(() => {
		setTheme("light");
		console.log(theme);
	}, [setTheme, theme]);

	return (
		<ThemeProvider
			defaultTheme="system"
			storageKey="theme"
			enableSystem
			attribute="class"
		>
			{children}
		</ThemeProvider>
	);
};

export default GlobalThemeProvider;
