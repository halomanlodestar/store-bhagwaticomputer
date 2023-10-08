/** @format */

import InlineCategoryContainer from "@/components/category-containers/Inline";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<InlineCategoryContainer />
			{children}
		</div>
	);
}
