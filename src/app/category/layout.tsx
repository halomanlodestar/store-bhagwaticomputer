/** @format */

import Container from "@/components/Container";
import InlineCategoryContainer from "@/components/category-containers/Inline";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<InlineCategoryContainer />
			<Container>{children}</Container>
		</div>
	);
}
